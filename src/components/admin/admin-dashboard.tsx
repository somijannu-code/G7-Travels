'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Users,
  Car,
  MapPin,
  DollarSign,
  TrendingUp,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  XCircle,
  Search,
  Filter,
  Download,
  MoreHorizontal,
  Eye,
  Ban,
  Check,
  Calendar,
  BarChart3,
  Settings,
  Bell,
  User
} from 'lucide-react'

const DASHBOARD_STATS = [
  { title: 'Total Users', value: '12,453', change: '+12%', icon: Users, color: 'text-blue-600' },
  { title: 'Active Drivers', value: '856', change: '+8%', icon: Car, color: 'text-green-600' },
  { title: 'Today\'s Rides', value: '2,847', change: '+23%', icon: MapPin, color: 'text-orange-600' },
  { title: 'Revenue (Today)', value: '₹4,85,632', change: '+18%', icon: DollarSign, color: 'text-purple-600' },
]

const RECENT_RIDES = [
  { id: 'RIDE-001', user: 'Ramesh K.', driver: 'Suresh M.', from: 'Tirupati Railway Station', to: 'Tirumala Temple', amount: '₹450', status: 'COMPLETED', time: '10 mins ago' },
  { id: 'RIDE-002', user: 'Priya S.', driver: 'Waiting...', from: 'Renigunta Airport', to: 'Hotel Grand World', amount: '₹680', status: 'SEARCHING', time: '2 mins ago' },
  { id: 'RIDE-003', user: 'Vijay R.', driver: 'Rajesh K.', from: 'Chandragiri Fort', to: 'Tirupati Bus Stand', amount: '₹320', status: 'IN_PROGRESS', time: '15 mins ago' },
  { id: 'RIDE-004', user: 'Anitha D.', driver: 'Kiran T.', from: 'ISKCON Temple', to: 'Sri City', amount: '₹890', status: 'COMPLETED', time: '25 mins ago' },
  { id: 'RIDE-005', user: 'Suresh B.', driver: 'Mahesh P.', from: 'Tirumala', to: 'Kapila Theertham', amount: '₹280', status: 'CANCELLED', time: '35 mins ago' },
]

const PENDING_APPROVALS = [
  { id: 'DRV-001', name: 'Rajesh Kumar', phone: '+91 98765 43210', vehicle: 'Maruti Swift DL 12 AB 1234', documents: 'DL, RC, PUC', submitted: '2 hours ago' },
  { id: 'DRV-002', name: 'Srinivas Reddy', phone: '+91 87654 32109', vehicle: 'Honda City AP 39 CD 5678', documents: 'DL, RC', submitted: '4 hours ago' },
  { id: 'DRV-003', name: 'Venkatesh N.', phone: '+91 76543 21098', vehicle: 'Toyota Innova AP 28 EF 9012', documents: 'All', submitted: '6 hours ago' },
]

const STATUS_BADGES: Record<string, { variant: any; label: string; icon: any }> = {
  COMPLETED: { variant: 'default', label: 'Completed', icon: CheckCircle },
  SEARCHING: { variant: 'secondary', label: 'Searching', icon: Clock },
  IN_PROGRESS: { variant: 'outline', label: 'In Progress', icon: Activity },
  CANCELLED: { variant: 'destructive', label: 'Cancelled', icon: XCircle },
  PENDING: { variant: 'secondary', label: 'Pending', icon: Clock },
}

export function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState('overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
              G7
            </div>
            <div>
              <h1 className="text-xl font-bold">G7 Travels</h1>
              <p className="text-xs text-slate-500">Admin Dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-slate-500" />
              <Input
                placeholder="Search..."
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 w-48"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-orange-600" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {DASHBOARD_STATS.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">{stat.title}</p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <p className={`text-xs mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change} from yesterday
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg bg-slate-100 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="rides">Rides</TabsTrigger>
            <TabsTrigger value="drivers">Drivers</TabsTrigger>
            <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Rides */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Recent Rides</CardTitle>
                      <CardDescription>Latest ride bookings and their status</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Today
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ride ID</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Route</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {RECENT_RIDES.slice(0, 5).map((ride) => {
                        const status = STATUS_BADGES[ride.status]
                        const StatusIcon = status.icon
                        return (
                          <TableRow key={ride.id}>
                            <TableCell className="font-medium">{ride.id}</TableCell>
                            <TableCell>{ride.user}</TableCell>
                            <TableCell>
                              <div className="text-xs">
                                <div>{ride.from.substring(0, 15)}...</div>
                                <div className="text-slate-500">to {ride.to.substring(0, 15)}...</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant={status.variant} className="gap-1">
                                <StatusIcon className="w-3 h-3" />
                                {status.label}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-medium">{ride.amount}</TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Pending Approvals */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Pending Approvals</CardTitle>
                      <CardDescription>Driver registrations awaiting verification</CardDescription>
                    </div>
                    <Badge variant="secondary">{PENDING_APPROVALS.length} pending</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {PENDING_APPROVALS.map((driver) => (
                    <div key={driver.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold">{driver.name}</h4>
                          <p className="text-sm text-slate-600">{driver.phone}</p>
                        </div>
                        <span className="text-xs text-slate-500">{driver.submitted}</span>
                      </div>
                      <div className="text-sm">
                        <p className="text-slate-600">Vehicle: {driver.vehicle}</p>
                        <p className="text-slate-600">Documents: {driver.documents}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                          <Check className="w-4 h-4 mr-1" />
                          Approve
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Eye className="w-4 h-4 mr-1" />
                          Review
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Ban className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Rides Tab */}
          <TabsContent value="rides" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <CardTitle>All Rides</CardTitle>
                    <CardDescription>Manage and monitor all ride bookings</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 border rounded-lg p-2">
                      <Filter className="w-4 h-4 text-slate-500" />
                      <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="border-0 h-8 w-32">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Status</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="in_progress">In Progress</SelectItem>
                          <SelectItem value="searching">Searching</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ride ID</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Driver</TableHead>
                      <TableHead>Pickup</TableHead>
                      <TableHead>Drop</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {RECENT_RIDES.map((ride) => {
                      const status = STATUS_BADGES[ride.status]
                      const StatusIcon = status.icon
                      return (
                        <TableRow key={ride.id}>
                          <TableCell className="font-medium">{ride.id}</TableCell>
                          <TableCell>{ride.user}</TableCell>
                          <TableCell>{ride.driver}</TableCell>
                          <TableCell className="max-w-[150px] truncate">{ride.from}</TableCell>
                          <TableCell className="max-w-[150px] truncate">{ride.to}</TableCell>
                          <TableCell>
                            <Badge variant={status.variant} className="gap-1">
                              <StatusIcon className="w-3 h-3" />
                              {status.label}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-medium">{ride.amount}</TableCell>
                          <TableCell className="text-sm text-slate-600">{ride.time}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Drivers Tab */}
          <TabsContent value="drivers">
            <Card>
              <CardHeader>
                <CardTitle>Driver Management</CardTitle>
                <CardDescription>Manage drivers, approvals, and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-slate-500">
                  <Car className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                  <p>Driver management coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Vehicles Tab */}
          <TabsContent value="vehicles">
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Fleet</CardTitle>
                <CardDescription>Manage vehicle inventory, maintenance, and availability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-slate-500">
                  <Car className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                  <p>Vehicle management coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage user accounts, KYC verification, and support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-slate-500">
                  <Users className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                  <p>User management coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
