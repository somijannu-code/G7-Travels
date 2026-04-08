'use client'

import { useState, useEffect, useRef } from 'react'
import { Input } from '@/components/ui/input'
import { MapPin, Loader2, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface LocationResult {
  display_name: string
  lat: string
  lon: string
  address: {
    city?: string
    state?: string
    country?: string
    road?: string
  }
}

interface LocationAutocompleteProps {
  value: string
  onChange: (value: string, location: { lat: number; lon: number }) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}

export function LocationAutocomplete({
  value,
  onChange,
  placeholder = 'Enter location...',
  className,
  disabled = false
}: LocationAutocompleteProps) {
  const [query, setQuery] = useState(value)
  const [suggestions, setSuggestions] = useState<LocationResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Update query when value prop changes
  useEffect(() => {
    setQuery(value)
  }, [value])

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Search locations using Nominatim API (OpenStreetMap)
  const searchLocations = async (searchQuery: string) => {
    if (!searchQuery.trim() || searchQuery.length < 3) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    setIsLoading(true)
    try {
      // Focus on Tirupati area for better results
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=5&countrycodes=in&addressdetails=1&bounded=1&viewbox=79.3,13.7,79.6,13.5`,
        {
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'G7-Travels-Booking'
          }
        }
      )

      if (!response.ok) throw new Error('Failed to fetch locations')

      const data = await response.json()
      setSuggestions(data)
      setShowSuggestions(true)
    } catch (error) {
      console.error('Location search error:', error)
      setSuggestions([])
    } finally {
      setIsLoading(false)
    }
  }

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        searchLocations(query)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  const handleSelectLocation = (location: LocationResult) => {
    setQuery(location.display_name)
    onChange(location.display_name, {
      lat: parseFloat(location.lat),
      lon: parseFloat(location.lon)
    })
    setShowSuggestions(false)
  }

  const handleClear = () => {
    setQuery('')
    onChange('', { lat: 0, lon: 0 })
    inputRef.current?.focus()
  }

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && suggestions.length > 0 && setShowSuggestions(true)}
          placeholder={placeholder}
          className="pl-10 pr-10"
          disabled={disabled}
        />
        {isLoading && (
          <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground animate-spin" />
        )}
        {!isLoading && query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Suggestions dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-background border border-border rounded-md shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelectLocation(suggestion)}
              className="w-full px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground first:rounded-t-md last:rounded-b-md transition-colors"
            >
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{suggestion.display_name.split(',')[0]}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {suggestion.address.road && `${suggestion.address.road}, `}
                    {suggestion.address.city || suggestion.address.state || 'India'}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
