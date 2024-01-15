import AuthorPage from "@/app/admin/create/page"
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

    if (!data.category_ids || !Array.isArray(data.category_ids)) {
      return NextResponse.json(
        {
          success: false,
          message: "Category IDs are missing or not an array.",
        },
        {
          status: 400,
        }
      )
    }

    await prisma.news.create({
      data: {
        title: data.title,
        news_body: data.news_body,
        news_image: data.news_image,
        author_id: data.author_id,
        category_ids: data.category_ids,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: "News Created!",
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
      const news = await prisma.news.findMany()
      return NextResponse.json({ news })
    } catch (error) {
      console.error("Error fetching news:", error)
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
