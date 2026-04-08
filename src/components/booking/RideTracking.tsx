'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { MapPin, Car, Clock, Phone, MessageCircle, Navigation, Share2, Shield, Star, CheckCircle, XCircle, Route, Map } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Driver {
  id: string
  name: string
  photo: string
  vehicleNumber: string
  vehicleModel: string
  rating: number
  totalRides: number
  phone: string
  location: { lat: number; lon: number }
  eta: number
}

interface RideStatus {
  id: string
  status: 'SEARCHING' | 'DRIVER_ASSIGNED' | 'ARRIVING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
  pickupLocation: string
  dropLocation: string
  distance: number
  duration: number
  fare: number
  driver?: Driver
  startTime?: Date
  endTime?: Date
}

const MOCK_DRIVER: Driver = {
  id: 'DRV001',
  name: 'Ramesh Kumar',
  photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  vehicleNumber: 'AP 39 AB 1234',
  vehicleModel: 'Toyota Innova',
  rating: 4.8,
  totalRides: 1520,
  phone: '+91 98765 43210',
  location: { lat: 13.6288, lon: 79.4192 },
  eta: 5
}

export function RideTracking() {
  const [rideStatus, setRideStatus] = useState<RideStatus>({
    id: 'RIDE001',
    status: 'SEARCHING',
    pickupLocation: 'Tirupati Railway Station',
    dropLocation: 'Tirumala Temple',
    distance: 22.5,
    duration: 45,
    fare: 550
  })

  const [progress, setProgress] = useState(0)
  const [otp, setOtp] = useState('')
  
  // Live GPS Tracking State
  const [isGpsEnabled, setIsGpsEnabled] = useState(false)
  const [userLocation, setUserLocation] = useState<{lat: number, lon: number} | null>(null)

  // Simulate ride progress
  useEffect(() => {
    const timer = setInterval(() => {
      setRideStatus(prev => {
        if (prev.status === 'SEARCHING') {
          return { ...prev, status: 'DRIVER_ASSIGNED', driver: MOCK_DRIVER }
        } else if (prev.status === 'DRIVER_ASSIGNED') {
          return { ...prev, status: 'ARRIVING' }
        } else if (prev.status === 'ARRIVING') {
          return { ...prev, status: 'IN_PROGRESS', startTime: new Date() }
        } else if (prev.status === 'IN_PROGRESS') {
          setProgress(p => Math.min(p + 2, 100))
          if (progress >= 95) {
            return { ...prev, status: 'COMPLETED', endTime: new Date() }
          }
        }
        return prev
      })
    }, 3000)

    return () => clearInterval(timer)
  }, [progress])

  // Handle Live GPS Tracking
  useEffect(() => {
    let watchId: number
    
    if (isGpsEnabled && 'geolocation' in navigator) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          })
        },
        (error) => {
          console.error("Error getting location:", error)
          setIsGpsEnabled(false)
          alert("Unable to access GPS location. Please check browser permissions.")
        },
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
      )
    }

    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId)
    }
  }, [isGpsEnabled])

  const statusSteps = [
    { key: 'SEARCHING', label: 'Searching for driver', icon: <MapPin className="h-4 w-4" /> },
    { key: 'DRIVER_ASSIGNED', label: 'Driver assigned', icon: <Car className="h-4 w-4" /> },
    { key: 'ARRIVING', label: 'Driver arriving', icon: <Navigation className="h-4 w-4" /> },
    { key: 'IN_PROGRESS', label: 'Ride in progress', icon: <Route className="h-4 w-4" /> },
    { key: 'COMPLETED', label: 'Ride completed', icon: <CheckCircle className="h-4 w-4" /> }
  ]

  const getCurrentStepIndex = () => {
    return statusSteps.findIndex(step => step.key === rideStatus.status)
  }

  const handleShareTrip = () => {
    let shareText = `I'm on a G7 Travels ride from ${rideStatus.pickupLocation} to ${rideStatus.dropLocation}. Track my journey!`
    
    // Append live coordinates if GPS is active
    if (isGpsEnabled && userLocation) {
      shareText += `\nMy current coordinates: https://maps.google.com/?q=${userLocation.lat},${userLocation.lon}`
    }

    if (navigator.share) {
      navigator.share({
        title: 'G7 Travels Ride',
        text: shareText
      })
    } else {
      navigator.clipboard.writeText(shareText)
      alert('Trip details copied to clipboard!')
    }
  }

  const handleCallDriver = () => {
    if (rideStatus.driver) {
      window.open(`tel:${rideStatus.driver.phone}`, '_self')
    }
  }

  const handleEmergencyCall = () => {
    window.open('tel:9866143321', '_self')
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* Ride Status Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Ride Status</span>
            <Badge variant={
              rideStatus.status === 'COMPLETED' ? 'default' :
              rideStatus.status === 'CANCELLED' ? 'destructive' :
              'secondary'
            }>
              {rideStatus.status.replace('_', ' ')}
            </Badge>
          </CardTitle>
          <CardDescription>
            {rideStatus.pickupLocation} → {rideStatus.dropLocation}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Progress Steps */}
          <div className="space-y-4">
            {statusSteps.map((step, index) => {
              const isCompleted = index <= getCurrentStepIndex()
              const isCurrent = index === getCurrentStepIndex()

              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                    isCompleted ? 'bg-primary text-primary-foreground' :
                    isCurrent ? 'bg-primary/20 text-primary ring-2 ring-primary' :
                    'bg-muted text-muted-foreground'
                  )}>
                    {isCompleted && step.key !== 'COMPLETED' ? <CheckCircle className="h-5 w-5" /> : step.icon}
                  </div>
                  <div className="flex-1">
                    <p className={cn(
                      "font-medium",
                      isCurrent ? 'text-primary' : isCompleted ? 'text-foreground' : 'text-muted-foreground'
                    )}>
                      {step.label}
                    </p>
                    {isCurrent && rideStatus.status === 'ARRIVING' && rideStatus.driver && (
                      <p className="text-sm text-muted-foreground">
                        ETA: {rideStatus.driver.eta} mins
                      </p>
                    )}
                  </div>
                  {isCompleted && step.key !== 'COMPLETED' && (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Route Progress Bar for In-Progress Ride */}
          {rideStatus.status === 'IN_PROGRESS' && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Route Progress</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{rideStatus.pickupLocation}</span>
                <span>{rideStatus.dropLocation}</span>
              </div>
            </div>
          )}

          {/* Live GPS Tracking Toggle */}
          <div className="flex flex-col p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Map className={cn("h-4 w-4", isGpsEnabled ? "text-green-500 animate-pulse" : "text-muted-foreground")} />
                <span className="text-sm font-medium">Live GPS Tracking</span>
              </div>
              <Switch checked={isGpsEnabled} onCheckedChange={setIsGpsEnabled} />
            </div>
            {isGpsEnabled && userLocation && (
              <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Location active: {userLocation.lat.toFixed(4)}, {userLocation.lon.toFixed(4)}
              </p>
            )}
          </div>

          {/* Driver Information */}
          <AnimatePresence>
            {rideStatus.driver && rideStatus.status !== 'COMPLETED' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4 bg-muted rounded-lg space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-primary/10">
                    <img
                      src={rideStatus.driver.photo}
                      alt={rideStatus.driver.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{rideStatus.driver.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{rideStatus.driver.rating}</span>
                      <span>•</span>
                      <span>{rideStatus.driver.totalRides} rides</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {rideStatus.driver.vehicleModel} • {rideStatus.driver.vehicleNumber}
                    </p>
                  </div>
                </div>

                {/* Driver Actions */}
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" onClick={handleCallDriver}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call Driver
                  </Button>
                  <Button variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>

                {/* OTP for Ride Start */}
                {rideStatus.status === 'ARRIVING' && (
                  <div className="p-3 bg-primary/10 rounded-lg text-center">
                    <p className="text-sm font-medium mb-2">Share this OTP with your driver</p>
                    <p className="text-3xl font-bold tracking-wider">{otp || '4829'}</p>
                  </div>
                )}

                {/* Safety Features */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" onClick={handleShareTrip}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Trip
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Shield className="h-4 w-4 mr-2" />
                    Safety
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Ride Details */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t">
            <div className="text-center">
              <Route className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <p className="text-2xl font-bold">{rideStatus.distance}</p>
              <p className="text-xs text-muted-foreground">km</p>
            </div>
            <div className="text-center">
              <Clock className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <p className="text-2xl font-bold">{rideStatus.duration}</p>
              <p className="text-xs text-muted-foreground">mins</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">₹{rideStatus.fare}</p>
              <p className="text-xs text-muted-foreground">Total Fare</p>
            </div>
          </div>

          {/* Completed Ride Actions */}
          {rideStatus.status === 'COMPLETED' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4 pt-4 border-t"
            >
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">Ride Completed!</h3>
                <p className="text-sm text-green-600/70 dark:text-green-300/70 mt-1">
                  Thank you for choosing G7 Travels
                </p>
              </div>

              <div className="space-y-2">
                <Label>Rate your ride</Label>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <Star className={cn(
                        "h-6 w-6",
                        star <= 5 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      )} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Write Review
                </Button>
                <Button variant="outline">
                  <Navigation className="h-4 w-4 mr-2" />
                  Book Again
                </Button>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>

      {/* Emergency SOS */}
      <Card className="border-red-200 bg-red-50 dark:bg-red-900/10">
        <CardContent className="p-4">
          <Button
            variant="destructive"
            className="w-full"
            size="lg"
            onClick={handleEmergencyCall}
          >
            <Phone className="mr-2 h-4 w-4 animate-pulse" />
            Emergency SOS (Call 9866143321)
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
