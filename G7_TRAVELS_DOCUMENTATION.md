# G7 Travels - Hyperlocal Travel Platform

> A production-ready web platform for rental car bookings and on-demand ride bookings exclusively within Tirupati, Andhra Pradesh, India.

## 📍 Table of Contents

- [Overview](#overview)
- [System Architecture](#system-architecture)
- [Technology Stack](#technology-stack)
- [Database Schema](#database-schema)
- [API Documentation](#api-documentation)
- [Frontend Structure](#frontend-structure)
- [Features](#features)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Deployment Guide](#deployment-guide)
- [Security & Compliance](#security--compliance)
- [External Services](#external-services)
- [Implementation Roadmap](#implementation-roadmap)

---

## 🎯 Overview

G7 Travels is a hyperlocal travel service providing:
- **On-demand ride bookings** (like Ola/Uber)
- **Rental car bookings** (hourly/daily/weekly)
- **Self-drive & chauffeur-driven options**
- **Geo-fenced to Tirupati** and surrounding areas (Tirumala, Chandragiri, Sricity, Renigunta Airport, etc.)

### Service Area

**Primary:** Tirupati city, Andhra Pradesh
**Extended:**
- Tirumala (20km radius)
- Chandragiri (15km radius)
- Sricity (10km radius)
- Renigunta Airport (10km radius)
- Tirupati Railway Station & Bus Stands
- Major hotels and temples

---

## 🏗️ System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Client Layer                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Web App    │  │  PWA App     │  │  Admin Panel │      │
│  │  (Next.js)   │  │  (Next.js)   │  │  (Next.js)   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      API Gateway (Caddy)                     │
│              (Port forwarding & routing)                      │
└─────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   Next.js    │  │  WebSocket   │  │   Payment    │
│   API (3000) │  │  Service    │  │   Webhooks   │
└──────────────┘  │    (3003)    │  └──────────────┘
        │         └──────────────┘
        ▼
┌─────────────────────────────────────────────────────────────┐
│                    Data Layer                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Prisma ORM  │  │   SQLite DB  │  │  File Storage│      │
│  │              │  │   (Local)    │  │  (Documents) │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### Service Boundaries

1. **User Service**: Authentication, profile management, KYC
2. **Ride Service**: Ride booking, driver matching, tracking
3. **Rental Service**: Vehicle rentals, reservations, inspections
4. **Payment Service**: Payments, refunds, invoicing
5. **Notification Service**: SMS, email, push notifications
6. **Admin Service**: Dashboard, analytics, fleet management

---

## 🛠️ Technology Stack

### Core Framework
- **Framework**: Next.js 16 with App Router (Required)
- **Language**: TypeScript 5 (Required)
- **Runtime**: Bun

### Frontend
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (New York style)
- **State Management**: Zustand (client state), TanStack Query (server state)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Date Handling**: date-fns

### Backend
- **API**: Next.js API Routes (REST)
- **Database**: SQLite with Prisma ORM
- **Real-time**: Socket.io (via WebSocket mini-service)
- **Authentication**: JWT tokens (simplified for demo)

### Integrations
- **Payments**: Razorpay/PayU (to be integrated)
- **SMS**: Twilio/MSG91 (to be integrated)
- **Email**: SendGrid/Resend (to be integrated)
- **Maps**: Google Maps / MapmyIndia (to be integrated)

---

## 🗄️ Database Schema

### Core Models

#### User
- Authentication & profile management
- Roles: CUSTOMER, DRIVER, ADMIN, SUPER_ADMIN
- KYC status tracking
- Wallet & loyalty points
- Referral system

#### DriverProfile
- Driver verification documents (DL, RC, PUC, Permit, Insurance)
- Bank details for payouts
- Availability status & location
- Performance metrics

#### Vehicle
- Vehicle inventory management
- Pricing configuration (ride & rental)
- Maintenance records
- Document expiry tracking

#### Ride
- On-demand ride bookings
- Status tracking (PENDING → COMPLETED)
- GPS coordinates & route data
- Fare calculation & payment
- OTP verification

#### RentalBooking
- Hourly/daily/weekly rentals
- Self-drive & chauffeur-driven options
- Inspection records (pre/post)
- Mileage & damage tracking
- Extensions & cancellations

#### Payment
- Payment processing
- GST calculation (18%)
- Invoice generation
- Refund handling

#### PromoCode
- Discount management
- Usage limits
- Validity periods
- Target user segmentation

### Complete Schema

See `/prisma/schema.prisma` for the complete database schema with all models, relationships, and indexes.

---

## 📡 API Documentation

### Authentication Endpoints

#### POST `/api/auth/send-otp`
Send OTP to phone number for login/verification.

**Request:**
```json
{
  "phone": "9876543210"
}
```

**Response:**
```json
{
  "success": true,
  "message": "OTP sent successfully",
  "otp": "123456"  // Only in development
}
```

#### POST `/api/auth/verify-otp`
Verify OTP and create session.

**Request:**
```json
{
  "phone": "9876543210",
  "otp": "123456",
  "name": "John Doe",  // Optional for new users
  "email": "john@example.com"  // Optional
}
```

**Response:**
```json
{
  "success": true,
  "message": "OTP verified successfully",
  "token": "eyJ...",
  "user": {
    "id": "user_123",
    "name": "John Doe",
    "phone": "9876543210",
    "role": "CUSTOMER"
  }
}
```

#### POST `/api/auth/login`
Email/password authentication.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### POST `/api/auth/register`
Create new user account.

**Request:**
```json
{
  "name": "John Doe",
  "phone": "9876543210",
  "email": "john@example.com",
  "password": "SecurePass123!",
  "language": "en"
}
```

### Ride Booking Endpoints

#### POST `/api/rides/estimate`
Calculate fare estimate for a ride.

**Request:**
```json
{
  "pickupLat": 13.6288,
  "pickupLon": 79.4191,
  "dropLat": 13.6833,
  "dropLon": 79.35,
  "vehicleType": "sedan"
}
```

**Response:**
```json
{
  "success": true,
  "estimate": {
    "distance": 14.5,
    "duration": 35,
    "baseFare": 69,
    "distanceFare": 174,
    "timeFare": 70,
    "gstAmount": 58,
    "surgeMultiplier": 1.0,
    "totalAmount": 371,
    "breakdown": {
      "baseFare": 69,
      "distanceCharge": 174,
      "timeCharge": 70,
      "gst": 58,
      "surgeCharge": 0
    }
  }
}
```

#### GET `/api/rides`
List user's rides with pagination.

**Query Parameters:**
- `userId` (required): User ID
- `status` (optional): Filter by status
- `limit` (optional): Number of results (default: 10)
- `offset` (optional): Pagination offset (default: 0)

#### POST `/api/rides`
Create new ride booking.

**Request:**
```json
{
  "userId": "user_123",
  "pickupLat": 13.6288,
  "pickupLon": 79.4191,
  "pickupAddress": "Tirupati Railway Station",
  "pickupLandmark": "Near Platform 1",
  "dropLat": 13.6833,
  "dropLon": 79.35,
  "dropAddress": "Tirumala Temple",
  "dropLandmark": "Main Entrance",
  "vehicleType": "sedan",
  "estimatedFare": 371,
  "bookingType": "now",
  "scheduledAt": null,
  "promoCode": "WELCOME50"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Ride booked successfully",
  "ride": {
    "id": "ride_123",
    "userId": "user_123",
    "status": "PENDING",
    "estimatedFare": 371,
    "rideOtp": "1234",
    ...
  }
}
```

---

## 🎨 Frontend Structure

### Page Structure
```
src/app/
├── page.tsx                    # Landing page
├── layout.tsx                  # Root layout
├── globals.css                 # Global styles
├── api/                        # API routes
│   ├── auth/
│   │   ├── send-otp/
│   │   ├── verify-otp/
│   │   ├── login/
│   │   └── register/
│   └── rides/
│       ├── estimate/
│       └── route.ts
└── components/
    ├── ui/                     # shadcn/ui components
    ├── auth/
    │   └── auth-form.tsx
    ├── booking/
    │   └── ride-booking.tsx
    └── admin/
        └── admin-dashboard.tsx
```

### Key Components

#### AuthForm (`/components/auth/auth-form.tsx`)
- Login with OTP
- Login with email/password
- User registration
- Language selection (English, Telugu, Hindi)

#### RideBooking (`/components/booking/ride-booking.tsx`)
- 3-step booking flow
- Location input with autocomplete
- Vehicle selection
- Fare estimation
- Booking confirmation

#### AdminDashboard (`/components/admin/admin-dashboard.tsx`)
- Overview with statistics
- Ride monitoring
- Driver approvals
- User management
- Vehicle fleet

---

## ✨ Features

### Implemented Features ✅

1. **User Authentication**
   - Phone OTP login
   - Email/password login
   - User registration
   - Session management
   - Account lockout after failed attempts

2. **Ride Booking**
   - Fare estimation
   - Vehicle selection
   - Route calculation
   - Promo code support
   - Booking confirmation

3. **Admin Dashboard**
   - Real-time statistics
   - Ride monitoring
   - Driver approval workflow
   - User management interface

4. **Geo-fencing**
   - Tirupati area validation
   - Nearby areas support
   - Clear error messages

5. **Database**
   - Complete schema
   - All relationships
   - Indexes for performance

### Pending Features 🚧

1. **Real-time Tracking**
   - WebSocket integration
   - Live driver location
   - ETA updates
   - Route sharing

2. **Payment Integration**
   - Razorpay/PayU integration
   - UPI support
   - Refund handling
   - GST invoicing

3. **Rental Booking**
   - Vehicle availability
   - Calendar booking
   - Inspection photos
   - Damage reporting

4. **Driver Portal**
   - Ride acceptance
   - Earnings dashboard
   - Navigation integration
   - Performance metrics

5. **PWA Support**
   - Offline booking history
   - Push notifications
   - Add to home screen

6. **i18n**
   - English, Telugu, Hindi
   - RTL support

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd my-project
```

2. **Install dependencies**
```bash
bun install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your values
```

4. **Initialize database**
```bash
bun run db:push
```

5. **Start development server**
```bash
bun run dev
```

6. **Access the application**
- Open browser to `http://localhost:3000`
- Or use the Preview Panel in your IDE

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
# Database
DATABASE_URL="file:./db/custom.db"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"

# Payment Gateways (to be configured)
RAZORPAY_KEY_ID=""
RAZORPAY_KEY_SECRET=""
PAYU_MERCHANT_KEY=""
PAYU_MERCHANT_SALT=""

# SMS Gateway (to be configured)
TWILIO_ACCOUNT_SID=""
TWILIO_AUTH_TOKEN=""
TWILIO_PHONE_NUMBER=""

# Email Service (to be configured)
RESEND_API_KEY=""

# Maps (to be configured)
GOOGLE_MAPS_API_KEY=""
MAPMYINDIA_CLIENT_ID=""
MAPMYINDIA_CLIENT_SECRET=""

# JWT Secret (for production)
JWT_SECRET="your-super-secret-jwt-key"
```

---

## 📦 Deployment Guide

### Development
```bash
bun run dev
```

### Production Build
```bash
bun run build
bun run start
```

### Docker Deployment

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=file:./db/custom.db
      - NODE_ENV=production
    volumes:
      - ./db:/app/db

  websocket:
    build: ./mini-services/tracking-service
    ports:
      - "3003:3003"
```

### CI/CD Pipeline

Using GitHub Actions:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run build
      - run: bun run start
```

---

## 🔒 Security & Compliance

### Security Features

1. **Authentication**
   - JWT token-based authentication
   - Refresh token support (to be added)
   - OTP-based login with expiry
   - Account lockout after 5 failed attempts

2. **Data Protection**
   - Password hashing (bcrypt to be added)
   - Sensitive data encryption at rest
   - HTTPS everywhere
   - CSRF protection

3. **API Security**
   - Rate limiting (to be added)
   - Input validation
   - SQL injection prevention (Prisma ORM)
   - XSS protection

### Compliance

1. **DPDP Act 2023 (India)**
   - User consent for data collection
   - Data deletion on request
   - Data localization
   - Privacy policy

2. **GST Compliance**
   - GST calculation (18%)
   - Invoice generation
   - Tax reports

3. **Transport Regulations**
   - Driver verification
   - Vehicle permits
   - Insurance tracking
   - RTO compliance

4. **PCI-DSS**
   - Payment tokenization
   - No card data storage
   - Secure payment gateways

---

## 🔌 External Services

### Required for Production

1. **Payment Gateway**
   - Razorpay: https://razorpay.com/
   - PayU: https://payu.in/

2. **SMS Gateway**
   - Twilio: https://www.twilio.com/
   - MSG91: https://msg91.com/

3. **Email Service**
   - SendGrid: https://sendgrid.com/
   - Resend: https://resend.com/

4. **Maps & Geocoding**
   - Google Maps: https://maps.google.com/
   - MapmyIndia: https://www.mapmyindia.com/

5. **Cloud Storage**
   - AWS S3: https://aws.amazon.com/s3/
   - Cloudinary: https://cloudinary.com/

### Onboarding Steps

#### Razorpay
1. Create account at https://razorpay.com/
2. Get API keys from Settings → API Keys
3. Configure webhooks for payment notifications
4. Add business details for KYC

#### Twilio
1. Create account at https://www.twilio.com/
2. Get Account SID and Auth Token
3. Purchase a phone number for India
4. Configure sender ID

#### Google Maps
1. Create project at https://console.cloud.google.com/
2. Enable Maps JavaScript API
3. Enable Geocoding API
4. Get API key with restrictions

---

## 📋 Implementation Roadmap

### Phase 1: MVP ✅ (Completed)
- [x] Database schema design
- [x] User authentication (OTP + email/password)
- [x] Ride booking flow
- [x] Fare estimation
- [x] Basic admin dashboard
- [x] Geo-fencing for Tirupati

### Phase 2: Real-time & Admin (In Progress)
- [x] Admin dashboard UI
- [ ] WebSocket service for real-time tracking
- [ ] Driver matching algorithm
- [ ] Live driver location updates
- [ ] Ride status notifications
- [ ] Advanced admin features

### Phase 3: Rentals & Payments (Planned)
- [ ] Rental car booking flow
- [ ] Vehicle availability calendar
- [ ] Payment gateway integration
- [ ] GST invoice generation
- [ ] Refund automation
- [ ] Wallet system

### Phase 4: Driver Portal (Planned)
- [ ] Driver onboarding
- [ ] Document verification
- [ ] Ride acceptance interface
- [ ] Earnings dashboard
- [ ] Performance metrics
- [ ] Navigation integration

### Phase 5: Scale & Compliance (Planned)
- [ ] Load testing (k6/Locust)
- [ ] Caching strategy
- [ ] CDN setup (Cloudflare)
- [ ] Monitoring (Sentry + LogRocket)
- [ ] Audit logs
- [ ] Role-based access control
- [ ] Data retention policies

---

## 📞 Support & Contact

For support or questions:
- Email: support@g7travels.com
- Phone: +91 98765 43210
- Address: 123 Tirumala Road, Tirupati, Andhra Pradesh - 517501

---

## 📄 License

Copyright © 2024 G7 Travels. All rights reserved.

---

**Built with ❤️ for Tirupati**
