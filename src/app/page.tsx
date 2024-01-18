"use client"

import Navbar from "./components/frontend/Navbar"
import Footer from "./components/frontend/Footer"
import Image from "next/image"
import Cars from "./images/car.jpeg"
import Poster from "./images/poster.png"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Link from "next/link"
config.autoAddCss = false
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useEffect, useState } from "react"

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

export default function HomePage() {
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


  const formatDate = (timestamp: string | number | Date | undefined) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString('en-GB')
  }

  const getCategoryColour = (categoryIds?: number[] | null): string => {
    if (!categoryIds || categoryIds.length === 0) return '#1E7610'

    const primaryCategoryId = categoryIds[0]
    const category = categories.find((c) => c.id === primaryCategoryId)

    const colourMap: Record<number, string> = {
      1: '#1E6D47',
      2: '#134074',
      3: '#D12626',
      4: '#1E7610',
      5: '#CD8210',
      6: '#6FAE1E',
      7: '#34A5AC',
      8: '#141414'
    }

    return category && colourMap[category.id] ? colourMap[category.id] : '#1E7610'
  }

  const getLimitedNews = (categoryNews: News[], limit: number): News[] => {
    return categoryNews.slice(0, limit)
  }

  const data_analytics = news.filter((data) => getCategoryName(data.category_ids) === getCategoryName([1]))
  const data_science = news.filter((data) => getCategoryName(data.category_ids) === getCategoryName([2]))
  const machine_learning = getLimitedNews(news.filter((data) => getCategoryName(data.category_ids) === getCategoryName([3])), 3)
  const inspirational = getLimitedNews(news.filter((data) => getCategoryName(data.category_ids) === getCategoryName([4])), 3)
  const data_engineer = news.filter((data) => getCategoryName(data.category_ids) === getCategoryName([5]))
  const ai = getLimitedNews(news.filter((data) => getCategoryName(data.category_ids) === getCategoryName([6])), 3)
  const true_story = news.filter((data) => getCategoryName(data.category_ids) === getCategoryName([7]))
  const cloud = news.filter((data) => getCategoryName(data.category_ids) === getCategoryName([8]))

  useEffect(() => {
    fetchNews()
    fetchCategories()
  }, [])

  return (
    <div className="">
      <Navbar />
      {/* Video Article Section*/}
      <section className="mt-[3%] text-[#141414]">
        <div className="w-[83%] mx-auto">
          <h1 className="font-bold sm:text-2xl text-[14px]">Welcome To Dataxpetrise!</h1>
          <p className="text-[14px]">We Discuss Everything About Data.</p>
        </div>
        <div className="w-[83%] mx-auto justify-between sm:flex block mt-[25px]">
          <div className="w-[72%]">
            <iframe src="https://www.youtube.com/embed/D2vj0WcvH5c?si=s4ErRK_Jv9hcUd6n" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="sm:w-[100%] sm:h-[400px] sm:mx-0 mx-auto w-full h-[25.2%]"></iframe>
          </div>
          <div className="w-[26%] h-[555px]">
            <Swiper
              direction={'vertical'}
              className="mySwiper"
              slidesPerView={2}
              autoHeight={false}
            >
              {machine_learning.map((data, index) => (
                <SwiperSlide key={data.id}>
                  <div className="card-1 mb-3 h-[255px]">
                    <div className="flex">
                      <div className="w-[46%]">
                        <Image
                          src={data.news_image}
                          width={150}
                          height={150}
                          alt="news image"
                          className=""
                        />
                      </div>
                      <div className="ml-[10px] mt-[16px]">
                        <div className="w-fit text-white px-3 py-2 text-xs font-bold" style={{ backgroundColor: getCategoryColour(data.category_ids) }}>{getCategoryName(data.category_ids)}</div>
                        <div className="mt-2 text-sm opacity-70 mx-auto">{formatDate(data.created_at)}</div>
                      </div>
                    </div>
                    <div className="mt-[13px]">
                      <Link href="#">
                        <h1 className="font-bold text-[15px]">{data.title}</h1>
                        <p className="text-[12px] mt-1 opacity-70">{`${data.news_body.substring(0, 120)}...`}</p>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-[83%] mx-auto mt-4">
          <Swiper
            spaceBetween={15}
            style={{
              '--swiper-navigation-color': '#141414',
            }}
            slidesPerView={4}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="px-[200px]"
          >
            {news.map((data, index) => (
              <SwiperSlide key={data.id}>
                <div className="flex flex-col w-[100%] cursor-pointer">
                  <div className="w-full">
                    <Image
                      src={data.news_image}
                      width={500}
                      height={500}
                      alt="news image"
                      loading="lazy"
                      className="w-full"
                    />
                  </div>
                  <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                    <div className="w-fit text-white px-3 py-2 text-xs font-bold" style={{ backgroundColor: getCategoryColour(data.category_ids) }}>{getCategoryName(data.category_ids)}</div>
                    <Link href="#">
                      <h1 className="mt-[18px] text-[15px] font-bold leading-6">{data.title}</h1>
                    </Link>
                    <p className="text-[15px] opacity-70 mt-[7px]">{formatDate(data.created_at)}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Advertisement Section*/}
      <section className="w-[83%] h-[630px] mx-auto mt-[30px] text-[#141414]">
        <div className="flex mt-[20px] justify-between">
          <div>
            <h1 className="font-bold text-[21px]">Interesting</h1>
            <Swiper
              direction={'vertical'}
              className="mySwiper"
              slidesPerView={2}
              style={{ 'height': '555px' }}
            >
              {inspirational.map((data, index) => (
                <SwiperSlide key={data.id}>
                  <Link href="#">
                    <div className="flex mt-[15px]">
                      <div className="w-[390px]">
                        <Image
                          src={data.news_image}
                          width={500}
                          height={500}
                          alt="news image"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="ml-[30px] w-[45%]">
                        <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold mt-[15px]">Inspirational</div>
                        <h1 className="font-bold text-[17px] mt-[10px]">{data.title}</h1>
                        <p className="text-[12px] opacity-70 mt-[10px]">{`${data.news_body.substring(0, 150)}...`}</p>
                        <p className="text-[17px] opacity-70 mt-[20px]">{formatDate(data.created_at)}</p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="ml-[20px]">
            <p className="font-bold text-[21px]">Advertisement</p>
            <div className="w-[300px] mt-[15px]">
              <Image
                src={Poster}
                alt="poster"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Categorical Section */}
      <section className=" mt-[30px] text-[#141414] mb-24 w-[83%] mx-auto">
        <div className="flex">
          <div className="w-[73%]">
            <div className="w-full">
              <h1 className="font-bold text-[21px] mb-[20px]">Popular News</h1>
              <div className="w-full">
                <Swiper
                  spaceBetween={15}
                  style={{
                    '--swiper-navigation-color': '#141414',
                  }}
                  slidesPerView={3}
                  navigation={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Navigation]}
                  className="px-[200px]"
                >
                  {news.map((data, index) => (
                    <SwiperSlide key={data.id}>
                      <div className="flex flex-col w-[100%] cursor-pointer">
                        <div className="w-full">
                          <Image
                            src={data.news_image}
                            width={500}
                            height={500}
                            alt="news image"
                            loading="lazy"
                            className="w-full"
                          />
                        </div>
                        <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                          <div className="w-fit text-white px-3 py-2 text-xs font-bold" style={{ backgroundColor: getCategoryColour(data.category_ids) }}>{getCategoryName(data.category_ids)}</div>
                          <Link href="#">
                            <h1 className="mt-[18px] text-[15px] font-bold leading-6">{data.title}</h1>
                          </Link>
                          <p className="text-[15px] opacity-70 mt-[7px]">{formatDate(data.created_at)}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="mt-[35px]">
              <h1 className="font-bold text-[21px] mb-[20px]">Old News</h1>
              <div className="w-full">
                <Swiper
                  spaceBetween={15}
                  style={{
                    '--swiper-navigation-color': '#141414',
                  }}
                  slidesPerView={3}
                  navigation={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Navigation]}
                  className="px-[200px]"
                >
                  {news.map((data, index) => (
                    <SwiperSlide key={data.id}>
                      <div className="flex flex-col w-[100%] cursor-pointer">
                        <div className="w-full">
                          <Image
                            src={data.news_image}
                            width={500}
                            height={500}
                            alt="news image"
                            loading="lazy"
                            className="w-full"
                          />
                        </div>
                        <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                          <div className="w-fit text-white px-3 py-2 text-xs font-bold" style={{ backgroundColor: getCategoryColour(data.category_ids) }}>{getCategoryName(data.category_ids)}</div>
                          <Link href="#">
                            <h1 className="mt-[18px] text-[15px] font-bold leading-6">{data.title}</h1>
                          </Link>
                          <p className="text-[15px] opacity-70 mt-[7px]">{formatDate(data.created_at)}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="mt-[35px]">
              <h1 className="font-bold text-[21px] mb-[20px]">All News</h1>
              <div className="w-full">
                <Swiper
                  spaceBetween={15}
                  style={{
                    '--swiper-navigation-color': '#141414',
                  }}
                  slidesPerView={3}
                  navigation={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Navigation]}
                  className="px-[200px]"
                >
                  {news.map((data, index) => (
                    <SwiperSlide key={data.id}>
                      <div className="flex flex-col w-[100%] cursor-pointer">
                        <div className="w-full">
                          <Image
                            src={data.news_image}
                            width={500}
                            height={500}
                            alt="news image"
                            loading="lazy"
                            className="w-full"
                          />
                        </div>
                        <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                          <div className="w-fit text-white px-3 py-2 text-xs font-bold" style={{ backgroundColor: getCategoryColour(data.category_ids) }}>{getCategoryName(data.category_ids)}</div>
                          <Link href="#">
                            <h1 className="mt-[18px] text-[15px] font-bold leading-6">{data.title}</h1>
                          </Link>
                          <p className="text-[15px] opacity-70 mt-[7px]">{formatDate(data.created_at)}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          {/*Latest News */}
          <div className="ml-[20px] w-[27%]">
            <div>
              <h1 className="font-bold text-[21px] mb-[20px]">Latest News</h1>
              <div className="">
                <Swiper
                  direction={'vertical'}
                  className="mySwiper"
                  slidesPerView={2}
                  autoHeight={false}
                >
                  {ai.map((data, index) => (
                    <SwiperSlide key={data.id}>
                      <div className="card-1 mb-3 h-[255px]">
                        <div className="flex">
                          <div className="w-[46%]">
                            <Image
                              src={data.news_image}
                              width={150}
                              height={150}
                              alt="news image"
                              className=""
                            />
                          </div>
                          <div className="ml-[10px] mt-[16px]">
                            <div className="w-fit text-white px-3 py-2 text-xs font-bold" style={{ backgroundColor: getCategoryColour(data.category_ids) }}>{getCategoryName(data.category_ids)}</div>
                            <div className="mt-2 text-sm opacity-70 mx-auto">{formatDate(data.created_at)}</div>
                          </div>
                        </div>
                        <div className="mt-[13px]">
                          <Link href="#">
                            <h1 className="font-bold text-[15px]">{data.title}</h1>
                            <p className="text-[12px] mt-1 opacity-70">{`${data.news_body.substring(0, 120)}...`}</p>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div>
              {/* bisa buat iklan */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
