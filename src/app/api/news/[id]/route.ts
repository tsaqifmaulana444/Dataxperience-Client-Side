import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10)

  await prisma.news.delete({
    where: {
      id: id,
    },
  })

  return NextResponse.json(
    {
      success: true,
      message: "Category Deleted!",
    },
    {
      status: 200,
    }
  )
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)

  const  data  = await request.json()

  const authors = await prisma.news.update({
    where: {
      id: id,
    },
    data: {
      title: data.title,
      news_body: data.news_body,
      news_image: data.news_image,
      category_ids: data.category_ids,
      categories: {
        set: data.category_ids?.map((id: number) => ({ id })) || [], // Make sure to handle category_ids correctly
      },
      updated_at: new Date(),
    },
  })  

  //return response JSON
  return NextResponse.json(
    {
      success: true,
      message: "Data Authors Updated!",
      data: authors,
    },
    {
      status: 200,
    }
  )
}

export async function GET(req: Request, { params }: { params: { id: string } }) {
  if (req.method === "GET") {
    const id = parseInt(params.id)

    try {
      const news = await prisma.news.findUnique({
        where: {
          id: Number(id),
        },
      })
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
