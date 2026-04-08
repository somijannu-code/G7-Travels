import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'fs'
import path from 'path'

const vehiclePrompts = [
  {
    type: 'hatchback',
    filename: 'hatchback.png',
    prompt: 'Modern compact hatchback car, professional product photography, white background, studio lighting, sleek design, Indian market vehicle, side view, high quality'
  },
  {
    type: 'sedan',
    filename: 'sedan.png',
    prompt: 'Modern sedan car, professional product photography, white background, studio lighting, elegant design, Indian market vehicle, side view, high quality'
  },
  {
    type: 'suv',
    filename: 'suv.png',
    prompt: 'Modern SUV car, professional product photography, white background, studio lighting, rugged design, Indian market vehicle, side view, high quality'
  },
  {
    type: 'premium-sedan',
    filename: 'premium-sedan.png',
    prompt: 'Luxury premium sedan car, professional product photography, white background, studio lighting, sophisticated design, high-end vehicle, side view, high quality'
  },
  {
    type: 'tempo-traveller',
    filename: 'tempo-traveller.png',
    prompt: 'Tempo Traveller van, professional product photography, white background, studio lighting, passenger vehicle, Indian market, side view, high quality'
  },
  {
    type: 'minibus',
    filename: 'minibus.png',
    prompt: 'Modern minibus, professional product photography, white background, studio lighting, passenger vehicle, Indian market, side view, high quality'
  }
]

export async function POST(request: NextRequest) {
  try {
    const zai = await ZAI.create()
    const publicDir = path.join(process.cwd(), 'public', 'vehicles')

    // Ensure directory exists
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }

    const results = []

    for (const vehicle of vehiclePrompts) {
      try {
        console.log(`Generating image for ${vehicle.type}...`)

        const response = await zai.images.generations.create({
          prompt: vehicle.prompt,
          size: '1344x768' // Landscape orientation for vehicles
        })

        const imageBase64 = response.data[0].base64
        const buffer = Buffer.from(imageBase64, 'base64')

        const outputPath = path.join(publicDir, vehicle.filename)
        fs.writeFileSync(outputPath, buffer)

        results.push({
          vehicle: vehicle.type,
          success: true,
          path: `/vehicles/${vehicle.filename}`,
          size: buffer.length
        })

        console.log(`✓ Generated ${vehicle.type}: ${vehicle.filename}`)
      } catch (error: any) {
        console.error(`✗ Failed to generate ${vehicle.type}:`, error.message)
        results.push({
          vehicle: vehicle.type,
          success: false,
          error: error.message
        })
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Vehicle images generation completed',
      results
    })
  } catch (error: any) {
    console.error('Image generation error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate vehicle images',
        details: error.message
      },
      { status: 500 }
    )
  }
}
