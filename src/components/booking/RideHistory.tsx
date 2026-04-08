'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Calendar, MapPin, Car, Clock, Star, Download, Filter, ChevronLeft, ChevronRight, Route } from 'lucide-react'
import { motion } from 'framer-motion'
import { format } from 'date-fns'

interface Ride {
  id: string
  date: Date
  pickupLocation: string
  dropLocation: string
  vehicleType: string
  distance: number
  duration: number
  fare: number
  status: 'COMPLETED' | 'CANCELLED' | 'NO_SHOW'
  driverName: string
  driverRating: number
  paymentMethod: string
}

const MOCK_RIDES: Ride[] = [
  {
    id: 'RIDE001',
    date: new Date('2024-01-15T10:30:00'),
    pickupLocation: 'Tirupati Railway Station',
    dropLocation: 'Tirumala Temple',
    vehicleType: 'Sedan',
    distance: 22.5,
    duration: 45,
    fare: 550,
    status: 'COMPLETED',
    driverName: 'Ramesh Kumar',
    driverRating: 4.8,
    paymentMethod: 'UPI'
  },
  {
    id: 'RIDE002',
    date: new Date('2024-01-14T14:20:00'),
    pickupLocation: 'Renigunta Airport',
    dropLocation: 'Tirupati City',
    vehicleType: 'SUV',
    distance: 15.3,
    duration: 30,
    fare: 380,
    status: 'COMPLETED',
    driverName: 'Suresh Reddy',
    driverRating: 4.6,
    paymentMethod: 'CARD'
  },
  {
    id: 'RIDE003',
    date: new Date('2024-01-12T09:00:00'),
    pickupLocation: 'Chandragiri Fort',
    dropLocation: 'Tirupati Bus Stand',
    vehicleType: 'Hatchback',
    distance: 18.7,
    duration: 35,
    fare: 420,
    status: 'CANCELLED',
    driverName: 'N/A',
    driverRating: 0,
    paymentMethod: 'N/A'
  },
  {
    id: 'RIDE004',
    date: new Date('2024-01-10T16:45:00'),
    pickupLocation: 'Sri City',
    dropLocation: 'Tirupati Railway Station',
    vehicleType: 'Sedan',
    distance: 45.2,
    duration: 90,
    fare: 1050,
    status: 'COMPLETED',
    driverName: 'Venkat Rao',
    driverRating: 4.9,
    paymentMethod: 'CASH'
  },
  {
    id: 'RIDE005',
    date: new Date('2024-01-08T11:30:00'),
    pickupLocation: 'Tirumala Temple',
    dropLocation: 'Tirupati City',
    vehicleType: 'Tempo Traveller',
    distance: 22.5,
    duration: 50,
    fare: 680,
    status: 'COMPLETED',
    driverName: 'Krishna Murthy',
    driverRating: 4.7,
    paymentMethod: 'WALLET'
  }
]

export function RideHistory() {
  const [rides] = useState<Ride[]>(MOCK_RIDES)
  const [filteredRides, setFilteredRides] = useState<Ride[]>(MOCK_RIDES)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('ALL')
  const [dateRange, setDateRange] = useState('ALL')
  const [currentPage, setCurrentPage] = useState(1)
  const ridesPerPage = 5

  const filterRides = () => {
    let filtered = rides

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(ride =>
        ride.pickupLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ride.dropLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ride.driverName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ride.id.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Status filter
    if (statusFilter !== 'ALL') {
      filtered = filtered.filter(ride => ride.status === statusFilter)
    }

    // Date range filter
    const now = new Date()
    if (dateRange === 'TODAY') {
      filtered = filtered.filter(ride =>
        ride.date.toDateString() === now.toDateString()
      )
    } else if (dateRange === 'WEEK') {
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
      filtered = filtered.filter(ride => ride.date >= weekAgo)
    } else if (dateRange === 'MONTH') {
      const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
      filtered = filtered.filter(ride => ride.date >= monthAgo)
    }

    setFilteredRides(filtered)
    setCurrentPage(1)
  }

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  const handleStatusFilter = (value: string) => {
    setStatusFilter(value)
  }

  const handleDateRange = (value: string) => {
    setDateRange(value)
  }

  // Apply filters when dependencies change
  useState(() => {
    filterRides()
  })

  const totalPages = Math.ceil(filteredRides.length / ridesPerPage)
  const startIndex = (currentPage - 1) * ridesPerPage
  const endIndex = startIndex + ridesPerPage
  const currentRides = filteredRides.slice(startIndex, endIndex)

  const totalSpent = rides
    .filter(r => r.status === 'COMPLETED')
    .reduce((sum, ride) => sum + ride.fare, 0)

  const totalDistance = rides
    .filter(r => r.status === 'COMPLETED')
    .reduce((sum, ride) => sum + ride.distance, 0)

  const avgRating = rides
    .filter(r => r.status === 'COMPLETED' && r.driverRating > 0)
    .reduce((sum, ride, _, arr) => sum + ride.driverRating / arr.length, 0)

  const handleDownloadInvoice = (rideId: string) => {
    alert(`Downloading invoice for ride ${rideId}...`)
  }

  const handleBookAgain = (ride: Ride) => {
    alert(`Rebooking ride from ${ride.pickupLocation} to ${ride.dropLocation}...`)
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Spent</p>
                <p className="text-2xl font-bold">₹{totalSpent.toLocaleString()}</p>
              </div>
              <Car className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Distance</p>
                <p className="text-2xl font-bold">{totalDistance.toFixed(1)} km</p>
              </div>
              <MapPin className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg. Rating</p>
                <div className="flex items-center gap-1">
                  <p className="text-2xl font-bold">{avgRating.toFixed(1)}</p>
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
              <Star className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Rides</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by location, driver, or ID"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select value={statusFilter} onValueChange={handleStatusFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">All Status</SelectItem>
                  <SelectItem value="COMPLETED">Completed</SelectItem>
                  <SelectItem value="CANCELLED">Cancelled</SelectItem>
                  <SelectItem value="NO_SHOW">No Show</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Date Range</Label>
              <Select value={dateRange} onValueChange={handleDateRange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">All Time</SelectItem>
                  <SelectItem value="TODAY">Today</SelectItem>
                  <SelectItem value="WEEK">Last 7 Days</SelectItem>
                  <SelectItem value="MONTH">Last 30 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button onClick={filterRides} className="w-full md:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            Apply Filters
          </Button>
        </CardContent>
      </Card>

      {/* Ride List */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Rides</CardTitle>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export All
          </Button>
        </CardHeader>
        <CardContent>
          {currentRides.length === 0 ? (
            <div className="text-center py-12">
              <Car className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No rides found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {currentRides.map((ride, index) => (
                <motion.div
                  key={ride.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 border rounded-lg hover:border-primary/50 transition-colors space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={
                          ride.status === 'COMPLETED' ? 'default' :
                          ride.status === 'CANCELLED' ? 'destructive' :
                          'secondary'
                        }>
                          {ride.status.replace('_', ' ')}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {format(ride.date, 'MMM dd, yyyy • HH:mm')}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">{ride.pickupLocation}</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">{ride.dropLocation}</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-right ml-4">
                      <p className="text-2xl font-bold text-primary">₹{ride.fare}</p>
                      <p className="text-xs text-muted-foreground">{ride.vehicleType}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm pt-3 border-t">
                    <div className="flex items-center gap-1">
                      <Route className="h-3 w-3 text-muted-foreground" />
                      <span>{ride.distance} km</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span>{ride.duration} min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Car className="h-3 w-3 text-muted-foreground" />
                      <span>{ride.driverName}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-muted-foreground" />
                      <span>{ride.driverRating > 0 ? ride.driverRating.toFixed(1) : 'N/A'}</span>
                    </div>
                  </div>

                  {ride.status === 'COMPLETED' && (
                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownloadInvoice(ride.id)}
                      >
                        <Download className="h-3 w-3 mr-1" />
                        Invoice
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleBookAgain(ride)}
                      >
                        Book Again
                      </Button>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-4 border-t mt-4">
              <p className="text-sm text-muted-foreground">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredRides.length)} of {filteredRides.length} rides
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Button
                    key={page}
                    variant={currentPage === page ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
