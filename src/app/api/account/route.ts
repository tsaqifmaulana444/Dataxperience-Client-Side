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

    if (!data.name) {
      return NextResponse.json({
        message: "Author name, email and default password are required.",
      })
    }

    await prisma.authors.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: "Author Created!",
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
      const authors = await prisma.authors.findMany()
      return NextResponse.json({ authors })
    } catch (error) {
      console.error("Error fetching author:", error)
      return NextResponse.json({ message: "Internal Server Error" })
    }
  } else {
    return NextResponse.json({ message: "Method Not Allowed" })
  }
}

