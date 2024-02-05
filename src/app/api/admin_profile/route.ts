import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET(req: Request) {
  const data = {
    id:1
  }

  if (req.method === "GET") {
    try {
      const authors = await prisma.authors.findFirst({
        where: { id: data.id },
      })
      return NextResponse.json({ authors })
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

