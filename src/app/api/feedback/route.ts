import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method Not Allowed" })
  }

  const data = await req.json()

  try {
    console.log("Received data:", data)

    await prisma.feedback.create({
      data: {
        name: data.name,
        email: data.email,
        description: data.description,
        type: data.type
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: "Feedback Submitted",
      },
      {
        status: 200,
      }
    )
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Something Went Wrong",
      },
      {
        status: 500,
      }
    )
  }
}

export async function GET(req: Request) {
  if (req.method === "GET") {
    try {
      const feedback = await prisma.feedback.findMany()
      return NextResponse.json({ feedback })
    } catch (error) {
      console.error("Error fetching author:", error)
      return NextResponse.json(
        {
          success: false,
          message: "Something Went Wrong",
        },
        {
          status: 500,
        }
      )
    }
  } else {
    return NextResponse.json(
      {
        success: false,
        message: "Method Not Allowed",
      },
      {
        status: 405,
      }
    )
  }
}

