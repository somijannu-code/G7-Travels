'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Phone, Mail, Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react'
import { motion } from 'framer-motion'

interface AuthFormProps {
  onSuccess?: () => void
}

export function AuthForm({ onSuccess }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loginMethod, setLoginMethod] = useState<'phone' | 'email'>('phone')
  const [otpSent, setOtpSent] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-orange-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl text-white font-bold text-2xl mb-4 shadow-lg">
            G7
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome to G7 Travels</h1>
          <p className="text-slate-600 mt-2">Your trusted travel partner in Tirupati</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardContent className="p-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login" className="space-y-4">
                <div className="flex gap-2 mb-4">
                  <Button
                    type="button"
                    variant={loginMethod === 'phone' ? 'default' : 'outline'}
                    className="flex-1"
                    onClick={() => setLoginMethod('phone')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Phone
                  </Button>
                  <Button
                    type="button"
                    variant={loginMethod === 'email' ? 'default' : 'outline'}
                    className="flex-1"
                    onClick={() => setLoginMethod('email')}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>

                {loginMethod === 'phone' ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-phone">Phone Number</Label>
                      <div className="flex gap-2">
                        <Select defaultValue="+91">
                          <SelectTrigger className="w-[100px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="+91">+91</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input
                          id="login-phone"
                          type="tel"
                          placeholder="98765 43210"
                          className="flex-1"
                        />
                      </div>
                    </div>

                    {!otpSent ? (
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700" onClick={() => setOtpSent(true)}>
                        <Phone className="w-4 h-4 mr-2" />
                        Send OTP
                      </Button>
                    ) : (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="login-otp">Enter OTP</Label>
                          <div className="flex gap-2">
                            {[...Array(6)].map((_, i) => (
                              <Input
                                key={i}
                                type="text"
                                maxLength={1}
                                className="w-12 h-12 text-center text-lg font-bold"
                              />
                            ))}
                          </div>
                          <p className="text-xs text-slate-500">
                            Didn't receive OTP? <Button variant="link" className="p-0 h-auto text-xs">Resend</Button>
                          </p>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Verify & Login
                        </Button>
                      </div>
                    )}

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <Separator className="w-full" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-slate-500">Or continue with</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="login-email">Email</Label>
                        <Input id="login-email" type="email" placeholder="your@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="login-password">Password</Label>
                        <div className="relative">
                          <Input
                            id="login-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="link" className="p-0 h-auto text-sm">Forgot Password?</Button>
                      </div>
                      <Button className="w-full">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Login
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email-only">Email Address</Label>
                      <Input id="login-email-only" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password-only">Password</Label>
                      <div className="relative">
                        <Input
                          id="login-password-only"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Button variant="link" className="p-0 h-auto text-sm">Forgot Password?</Button>
                    </div>
                    <Button className="w-full">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Login
                    </Button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <Separator className="w-full" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-slate-500">Or login with phone</span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setLoginMethod('phone')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Login with Phone OTP
                    </Button>
                  </div>
                )}
              </TabsContent>

              {/* Register Tab */}
              <TabsContent value="register" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-name">Full Name *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="register-name"
                      placeholder="Enter your full name"
                      className="pl-9"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-phone">Phone Number *</Label>
                  <div className="flex gap-2">
                    <Select defaultValue="+91">
                      <SelectTrigger className="w-[100px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+91">+91</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="register-phone"
                      type="tel"
                      placeholder="98765 43210"
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="your@email.com"
                      className="pl-9"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password">Password *</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="register-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a strong password"
                      className="pl-9"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                  <p className="text-xs text-slate-500">Min 8 characters with at least 1 number and 1 special character</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-confirm-password">Confirm Password *</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="register-confirm-password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      className="pl-9"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Preferred Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="te">తెలుగు (Telugu)</SelectItem>
                      <SelectItem value="hi">हिंदी (Hindi)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="terms" className="mt-1" />
                  <label htmlFor="terms" className="text-xs text-slate-600">
                    I agree to the <Button variant="link" className="p-0 h-auto text-xs">Terms of Service</Button> and <Button variant="link" className="p-0 h-auto text-xs">Privacy Policy</Button>
                  </label>
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                  <User className="w-4 h-4 mr-2" />
                  Create Account
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-slate-600 mt-6">
          By continuing, you agree to our <Button variant="link" className="p-0 h-auto text-sm">Terms</Button> and <Button variant="link" className="p-0 h-auto text-sm">Privacy Policy</Button>
        </p>
      </motion.div>
    </div>
  )
}
