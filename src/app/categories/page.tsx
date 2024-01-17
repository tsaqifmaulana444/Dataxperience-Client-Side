"use client"

import Navbar from "../components/frontend/Navbar"
import Footer from "../components/frontend/Footer"
import Image from "next/image"
import Cars from "../images/car.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

// export const metadata = {
//   title: 'Categories | Dataxperience'
// }

export default function CategoriesPage() {

  return (
    <div>
      <Navbar />
      <section className="w-[82%] mx-auto mt-[50px] mb-[100px]">
        <div className="mt-[30px]">
          <h1 className="font-bold text-[21px] mb-[20px]">Data Analyst</h1>
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
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-[30px]">
          <h1 className="font-bold text-[21px] mb-[20px]">Data Science</h1>
          <Swiper
            spaceBetween={15}
            style={{
              '--swiper-navigation-color': '#141414',
            }}
            slidesPerView={4}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="px-[200px]"
          >
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-[30px]">
          <h1 className="font-bold text-[21px] mb-[20px]">Artificial Intelligence</h1>
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
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-[30px]">
          <h1 className="font-bold text-[21px] mb-[20px]">Machine Learning</h1>
          <Swiper
            spaceBetween={15}
            style={{
              '--swiper-navigation-color': '#141414',
            }}
            slidesPerView={4}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="px-[200px]"
          >
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[100%] cursor-pointer">
                <div className="w-[100%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="-mt-[20px] mx-[8px] p-1 mb-3">
                  <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                  <h1 className="mt-[18px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                  <p className="text-[15px] opacity-70 mt-[7px]">30 October 2023</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <Footer />
    </div>
  )
}
