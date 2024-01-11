import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' })
  }

  const data = await req.json()

  try {
    console.log('Received data:', data)

    // Further processing and response handling should be added here

    return NextResponse.json({ message: 'Data received successfully' })
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json({ message: 'Internal Server Error' })
  }
}
