"use client"

import Navbar from "../components/frontend/Navbar"
import Footer from "../components/frontend/Footer"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useEffect, useState } from "react"
import { CSSProperties } from 'react'

interface CustomCSSProperties {
  '--swiper-navigation-color'?: string
}

type CustomStyle = CSSProperties & CustomCSSProperties

// export const metadata = {
//   title: 'Categories | Dataxperience'
// }

interface News {
  id?: number
  title: string
  news_body: string
  news_image: string
  category_ids?: number[] | null
  author_id?: number
  created_at?: string
  updated_at?: string
  deleted_at?: string | null
}

interface Category {
  id: number
  name: string
}

export default function CategoriesPage() {
  const [news, setNews] = useState<News[]>([])
  const [error, setError] = useState('')
  const [categories, setCategories] = useState<Category[]>([])

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/news', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log(response)
      if (response.ok) {
        const { news } = await response.json()
        setNews(news)
      } else {
        const error = await response.json()
        setError(error.message)
      }
    } catch (error) {
      console.error('Error fetching news:', error)
      setError('Internal Server Error')
    }
  }

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const { categories } = await response.json()
        setCategories(categories)
      } else {
        const error = await response.json()
        setError(error.message)
      }
    } catch (error) {
      console.error('Error fetching categories:', error)
      setError('Internal Server Error')
    }
  }

  const getCategoryName = (categoryIds?: number[] | null): string => {
    if (!categoryIds || categoryIds.length === 0) return ''

    const category = categories.find((c) => c.id === categoryIds[0])

    return category ? category.name : ''
  }


  const formatDate = (timestamp: string | number | Date | undefined): string => {
    if (!timestamp) {
      return "N/A"
    }

    const date = new Date(timestamp)
    return date.toLocaleDateString('en-GB')
  }

  const getCategoryColour = (categoryIds?: number[] | null): string => {
    if (!categoryIds || categoryIds.length === 0) return '#1E7610'

    const primaryCategoryId = categoryIds[0]
    const category = categories.find((c) => c.id === primaryCategoryId)

    const colourMap: Record<number, string> = {
      1: '#1E7610',
      2: '#FF5733',
      3: '#CCCCCC',
      4: '#0066cc',
    }

    return category && colourMap[category.id] ? colourMap[category.id] : '#1E7610'
  }

  const data_analytics = news.filter((data) => getCategoryName(data.category_ids) === getCategoryName([1]))
  const data_science = news.filter((data) => getCategoryName(data.category_ids) === getCategoryName([2]))
  const machine_learning = news.filter((data) => getCategoryName(data.category_ids) === getCategoryName([3]))
  const inspirational = news.filter((data) => getCategoryName(data.category_ids) === getCategoryName([4]))
  const data_engineer = news.filter((data) => getCategoryName(data.category_ids) === getCategoryName([5]))
  const ai = news.filter((data) => getCategoryName(data.category_ids) === getCategoryName([6]))
  const true_story = news.filter((data) => getCategoryName(data.category_ids) === getCategoryName([7]))
  const cloud = news.filter((data) => getCategoryName(data.category_ids) === getCategoryName([8]))

  useEffect(() => {
    fetchNews()
    fetchCategories()
  }, [])

  return (
    <div>
      <Navbar />
      <section className="w-[82%] mx-auto mt-[50px] mb-[100px]">
        <div className="mt-[30px]" id="data_analytics">
          <h1 className="font-bold text-[21px] mb-[20px]">Data Analyst</h1>
          <Swiper
            spaceBetween={15}
            style={{
              '--swiper-navigation-color': '#141414',
            } as CustomStyle}
            slidesPerView={4}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="px-[200px]"
          >
            {data_analytics.map((data, index) => (
              <SwiperSlide key={data.id}>
                <div className="flex flex-col w-[100%] cursor-pointer">
                  <div className="w-[100%]">
                    <Image
                      src={data.news_image}
                      width={500}
                      height={500}
                      alt="news image"
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                    <div className="w-fit text-white px-3 py-2 text-xs font-bold" style={{ backgroundColor: getCategoryColour(data.category_ids) }}>{getCategoryName(data.category_ids)}</div>
                    <h1 className="mt-[18px] text-[15px] font-bold leading-6">{data.title}</h1>
                    <p className="text-[15px] opacity-70 mt-[7px]">{formatDate(data.created_at)}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-[30px]" id="data_science">
          <h1 className="font-bold text-[21px] mb-[20px]">Data Science</h1>
          <Swiper
            spaceBetween={15}
            style={{
              '--swiper-navigation-color': '#141414',
            } as CustomStyle}
            slidesPerView={4}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="px-[200px]"
          >
            {data_science.map((data, index) => (
              <SwiperSlide key={data.id}>
                <div className="flex flex-col w-[100%] cursor-pointer">
                  <div className="w-[100%]">
                    <Image
                      src={data.news_image}
                      width={500}
                      height={500}
                      alt="news image"
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                    <div className="w-fit text-white px-3 py-2 text-xs font-bold" style={{ backgroundColor: getCategoryColour(data.category_ids) }}>{getCategoryName(data.category_ids)}</div>
                    <h1 className="mt-[18px] text-[15px] font-bold leading-6">{data.title}</h1>
                    <p className="text-[15px] opacity-70 mt-[7px]">{formatDate(data.created_at)}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-[30px]" id="machine_learning">
          <h1 className="font-bold text-[21px] mb-[20px]">Machine Learning</h1>
          <Swiper
            spaceBetween={15}
            style={{
              '--swiper-navigation-color': '#141414',
            } as CustomStyle}
            slidesPerView={4}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="px-[200px]"
          >
            {machine_learning.map((data, index) => (
              <SwiperSlide key={data.id}>
                <div className="flex flex-col w-[100%] cursor-pointer">
                  <div className="w-[100%]">
                    <Image
                      src={data.news_image}
                      width={500}
                      height={500}
                      alt="news image"
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                    <div className="w-fit text-white px-3 py-2 text-xs font-bold" style={{ backgroundColor: getCategoryColour(data.category_ids) }}>{getCategoryName(data.category_ids)}</div>
                    <h1 className="mt-[18px] text-[15px] font-bold leading-6">{data.title}</h1>
                    <p className="text-[15px] opacity-70 mt-[7px]">{formatDate(data.created_at)}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-[30px]" id="inspirational">
          <h1 className="font-bold text-[21px] mb-[20px]">Inspirational</h1>
          <Swiper
            spaceBetween={15}
            style={{
              '--swiper-navigation-color': '#141414',
            } as CustomStyle}
            slidesPerView={4}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="px-[200px]"
          >
            {inspirational.map((data, index) => (
              <SwiperSlide key={data.id}>
                <div className="flex flex-col w-[100%] cursor-pointer">
                  <div className="w-[100%]">
                    <Image
                      src={data.news_image}
                      width={500}
                      height={500}
                      alt="news image"
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                    <div className="w-fit text-white px-3 py-2 text-xs font-bold" style={{ backgroundColor: getCategoryColour(data.category_ids) }}>{getCategoryName(data.category_ids)}</div>
                    <h1 className="mt-[18px] text-[15px] font-bold leading-6">{data.title}</h1>
                    <p className="text-[15px] opacity-70 mt-[7px]">{formatDate(data.created_at)}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-[30px]" id="data_engineering">
          <h1 className="font-bold text-[21px] mb-[20px]">Data Engineering</h1>
          <Swiper
            spaceBetween={15}
            style={{
              '--swiper-navigation-color': '#141414',
            } as CustomStyle}
            slidesPerView={4}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="px-[200px]"
          >
            {data_engineer.map((data, index) => (
              <SwiperSlide key={data.id}>
                <div className="flex flex-col w-[100%] cursor-pointer">
                  <div className="w-[100%]">
                    <Image
                      src={data.news_image}
                      width={500}
                      height={500}
                      alt="news image"
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                    <div className="w-fit text-white px-3 py-2 text-xs font-bold" style={{ backgroundColor: getCategoryColour(data.category_ids) }}>{getCategoryName(data.category_ids)}</div>
                    <h1 className="mt-[18px] text-[15px] font-bold leading-6">{data.title}</h1>
                    <p className="text-[15px] opacity-70 mt-[7px]">{formatDate(data.created_at)}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-[30px]" id="ai">
          <h1 className="font-bold text-[21px] mb-[20px]">Artificial Intelligence</h1>
          <Swiper
            spaceBetween={15}
            style={{
              '--swiper-navigation-color': '#141414',
            } as CustomStyle}
            slidesPerView={4}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="px-[200px]"
          >
            {ai.map((data, index) => (
              <SwiperSlide key={data.id}>
                <div className="flex flex-col w-[100%] cursor-pointer">
                  <div className="w-[100%]">
                    <Image
                      src={data.news_image}
                      width={500}
                      height={500}
                      alt="news image"
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                    <div className="w-fit text-white px-3 py-2 text-xs font-bold" style={{ backgroundColor: getCategoryColour(data.category_ids) }}>{getCategoryName(data.category_ids)}</div>
                    <h1 className="mt-[18px] text-[15px] font-bold leading-6">{data.title}</h1>
                    <p className="text-[15px] opacity-70 mt-[7px]">{formatDate(data.created_at)}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-[30px]" id="true_story">
          <h1 className="font-bold text-[21px] mb-[20px]">True Story</h1>
          <Swiper
            spaceBetween={15}
            style={{
              '--swiper-navigation-color': '#141414',
            } as CustomStyle}
            slidesPerView={4}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="px-[200px]"
          >
            {true_story.map((data, index) => (
              <SwiperSlide key={data.id}>
                <div className="flex flex-col w-[100%] cursor-pointer">
                  <div className="w-[100%]">
                    <Image
                      src={data.news_image}
                      width={500}
                      height={500}
                      alt="news image"
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                    <div className="w-fit text-white px-3 py-2 text-xs font-bold" style={{ backgroundColor: getCategoryColour(data.category_ids) }}>{getCategoryName(data.category_ids)}</div>
                    <h1 className="mt-[18px] text-[15px] font-bold leading-6">{data.title}</h1>
                    <p className="text-[15px] opacity-70 mt-[7px]">{formatDate(data.created_at)}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-[30px]" id="cloud_computing">
          <h1 className="font-bold text-[21px] mb-[20px]">Cloud Computing</h1>
          <Swiper
            spaceBetween={15}
            style={{
              '--swiper-navigation-color': '#141414',
            } as CustomStyle}
            slidesPerView={4}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="px-[200px]"
          >
            {cloud.map((data, index) => (
              <SwiperSlide key={data.id}>
                <div className="flex flex-col w-[100%] cursor-pointer">
                  <div className="w-[100%]">
                    <Image
                      src={data.news_image}
                      width={500}
                      height={500}
                      alt="news image"
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                    <div className="w-fit text-white px-3 py-2 text-xs font-bold" style={{ backgroundColor: getCategoryColour(data.category_ids) }}>{getCategoryName(data.category_ids)}</div>
                    <h1 className="mt-[18px] text-[15px] font-bold leading-6">{data.title}</h1>
                    <p className="text-[15px] opacity-70 mt-[7px]">{formatDate(data.created_at)}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <Footer />
    </div>
  )
}
