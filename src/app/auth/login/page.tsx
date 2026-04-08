'use client'

import Link from 'next/link'
import { AuthForm } from '@/components/auth/auth-form'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-orange-50">
      <header className="border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              G7
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                G7 Travels
              </h1>
            </div>
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-orange-600">
            ← Back to Home
          </Link>
        </div>
      </header>
      <div className="flex-1">
        <AuthForm />
      </div>
    </div>
  )
}
