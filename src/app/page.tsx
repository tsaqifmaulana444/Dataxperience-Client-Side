import Navbar from "./components/frontend/Navbar"
import Footer from "./components/frontend/Footer"
import Image from "next/image"
import Cars from "./images/car.jpeg"
import Poster from "./images/poster.png"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Link from "next/link"
config.autoAddCss = false

export default function page() {
  return (
    <div className="">
      <Navbar />
      {/* Video Article Section*/}
      <section className="mt-[3%] text-[#141414]">
        <div className="w-[83%] mx-auto">
          <h1 className="font-bold sm:text-2xl text-[14px]">Welcome To Dataxpetrise!</h1>
          <p className="text-[14px]">We Discuss Everything About Data.</p>
        </div>
        <div className="w-[83%] mx-auto sm:flex block mt-[25px]">
          <div className="w-[72%]">
            <iframe src="https://www.youtube.com/embed/D2vj0WcvH5c?si=s4ErRK_Jv9hcUd6n" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="sm:w-[100%] sm:h-[400px] sm:mx-0 mx-auto w-full h-[25.2%]"></iframe>
          </div>
          <div className="ml-[30px] w-[24%]">
            <div className="card-1">
              <div className="flex">
                <div className="w-[46%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className=""
                  />
                </div>
                <div className="ml-[10px] mt-[16px]">
                  <div className="w-fit bg-[#134074] text-white px-3 py-2 text-xs font-bold">Machine Learning</div>
                  <div className="mt-2 text-sm opacity-70 mx-auto">2 Days Ago</div>
                </div>
              </div>
              <div className="mt-[13px]">
                <h1 className="font-bold text-[15px]">OpenCV 6 Update Now Support Fast Object Detection.</h1>
                <p className="text-[12px] mt-1 opacity-70">In OpenCV 6 update release, OpenCV latest feature can be integrated into a camera with high fps. Such as Nikon 3000 and Canon...</p>
              </div>
            </div>
            <div className="card-2 mt-[23px]">
              <div className="flex">
                <div className="w-[46%]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className=""
                  />
                </div>
                <div className="ml-[10px] mt-[16px]">
                  <div className="w-fit bg-[#134074] text-white px-3 py-2 text-xs font-bold">Machine Learning</div>
                  <div className="mt-2 text-sm opacity-70 mx-auto">2 Days Ago</div>
                </div>
              </div>
              <div className="mt-[13px]">
                <h1 className="font-bold text-[15px]">OpenCV 6 Update Now Support Fast Object Detection.</h1>
                <p className="text-[12px] mt-1 opacity-70">In OpenCV 6 update release, OpenCV latest feature can be integrated into a camera with high fps. Such as Nikon 3000 and Canon...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-[35px] w-[83%] mx-auto justify-between gap-4">
          <Link href="/details">
            <div className="flex flex-col cursor-pointer">
              <div className="w-full h-[110px]">
                <Image
                  src={Cars}
                  alt="cars"
                  className="w-full"
                />
              </div>
              <div className="mt-[52px] mx-[10px] mb-3">
                <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                <h1 className="mt-[12px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                <p className="text-[15px] opacity-70 mt-[4.5px]">30 October 2023</p>
              </div>
            </div>
          </Link>
          <div className="flex flex-col cursor-pointer">
            <div className="w-full h-[110px]">
              <Image
                src={Cars}
                alt="cars"
                className="w-full"
              />
            </div>
            <div className="mt-[52px] mx-[10px] mb-3">
              <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
              <h1 className="mt-[12px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
              <p className="text-[15px] opacity-70 mt-[4.5px]">30 October 2023</p>
            </div>
          </div>
          <div className="flex flex-col cursor-pointer">
            <div className="w-full h-[110px]">
              <Image
                src={Cars}
                alt="cars"
                className="w-full"
              />
            </div>
            <div className="mt-[52px] mx-[10px] mb-3">
              <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
              <h1 className="mt-[12px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
              <p className="text-[15px] opacity-70 mt-[4.5px]">30 October 2023</p>
            </div>
          </div>
          <div className="flex flex-col cursor-pointer">
            <div className="w-full h-[110px]">
              <Image
                src={Cars}
                alt="cars"
                className="w-full"
              />
            </div>
            <div className="mt-[52px] mx-[10px] mb-3">
              <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
              <h1 className="mt-[12px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
              <p className="text-[15px] opacity-70 mt-[4.5px]">30 October 2023</p>
            </div>
          </div>
        </div>
      </section>
      {/* Advertisement Section*/}
      <section className="w-[83%] mx-auto mt-[30px] text-[#141414]">
        <div className="flex mt-[20px] justify-between">
          <div>
            <h1 className="font-bold text-[21px]">Interesting</h1>
            <div className="flex mt-[15px]">
              <div className="w-[390px]">
                <Image
                  src={Cars}
                  alt="cars"
                  className="w-full h-full"
                />
              </div>
              <div className="ml-[30px] w-[45%]">
                <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold mt-[15px]">Inspirational</div>
                <h1 className="font-bold text-[17px] mt-[10px]">A Story From Zambia, From Nothing To Work As Data Analyst In Her Country.</h1>
                <p className="text-[12px] opacity-70 mt-[10px]">Today inspirational story came from a woman called Naomi Bonolo, She was born in the capital city of the country Lusaka. She was born poor without...</p>
                <p className="text-[17px] opacity-70 mt-[20px]">1 Day Ago</p>
              </div>
            </div>
            <div className="flex mt-[35px]">
              <div className="w-[390px]">
                <Image
                  src={Cars}
                  alt="cars"
                  className="w-full h-full"
                />
              </div>
              <div className="ml-[30px] w-[45%]">
                <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold mt-[15px]">Inspirational</div>
                <h1 className="font-bold text-[17px] mt-[10px]">A Story From Zambia, From Nothing To Work As Data Analyst In Her Country.</h1>
                <p className="text-[12px] opacity-70 mt-[10px]">Today inspirational story came from a woman called Naomi Bonolo, She was born in the capital city of the country Lusaka. She was born poor without...</p>
                <p className="text-[17px] opacity-70 mt-[20px]">1 Day Ago</p>
              </div>
            </div>
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
          <div>
            <div>
              <h1 className="font-bold text-[21px] mb-[20px]">Popular News</h1>
              <div className="w-[100%] flex justify-between">
                <div className="flex flex-col w-[32%] cursor-pointer">
                  <div className="w-full h-[110px]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-full"
                    />
                  </div>
                  <div className="mt-[52px] mx-[10px] mb-3">
                    <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                    <h1 className="mt-[12px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                    <p className="text-[15px] opacity-70 mt-[4.5px]">30 October 2023</p>
                  </div>
                </div>
                <div className="flex flex-col w-[32%] cursor-pointer">
                  <div className="w-full h-[110px]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-full"
                    />
                  </div>
                  <div className="mt-[52px] mx-[10px] mb-3">
                    <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                    <h1 className="mt-[12px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                    <p className="text-[15px] opacity-70 mt-[4.5px]">30 October 2023</p>
                  </div>
                </div>
                <div className="flex flex-col w-[32%] cursor-pointer">
                  <div className="w-full h-[110px]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-full"
                    />
                  </div>
                  <div className="mt-[52px] mx-[10px] mb-3">
                    <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                    <h1 className="mt-[12px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                    <p className="text-[15px] opacity-70 mt-[4.5px]">30 October 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[35px]">
              <h1 className="font-bold text-[21px] mb-[20px]">Old News</h1>
              <div className="w-[100%] flex justify-between">
                <div className="flex flex-col w-[32%] cursor-pointer">
                  <div className="w-full h-[110px]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-full"
                    />
                  </div>
                  <div className="mt-[52px] mx-[10px] mb-3">
                    <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                    <h1 className="mt-[12px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                    <p className="text-[15px] opacity-70 mt-[4.5px]">30 October 2023</p>
                  </div>
                </div>
                <div className="flex flex-col w-[32%] cursor-pointer">
                  <div className="w-full h-[110px]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-full"
                    />
                  </div>
                  <div className="mt-[52px] mx-[10px] mb-3">
                    <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                    <h1 className="mt-[12px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                    <p className="text-[15px] opacity-70 mt-[4.5px]">30 October 2023</p>
                  </div>
                </div>
                <div className="flex flex-col w-[32%] cursor-pointer">
                  <div className="w-full h-[110px]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-full"
                    />
                  </div>
                  <div className="mt-[52px] mx-[10px] mb-3">
                    <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                    <h1 className="mt-[12px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                    <p className="text-[15px] opacity-70 mt-[4.5px]">30 October 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[35px]">
              <h1 className="font-bold text-[21px] mb-[20px]">All News</h1>
              <div className="w-[100%] flex justify-between">
                <div className="flex flex-col w-[32%] cursor-pointer">
                  <div className="w-full h-[110px]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-full"
                    />
                  </div>
                  <div className="mt-[52px] mx-[10px] mb-3">
                    <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                    <h1 className="mt-[12px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                    <p className="text-[15px] opacity-70 mt-[4.5px]">30 October 2023</p>
                  </div>
                </div>
                <div className="flex flex-col w-[32%] cursor-pointer">
                  <div className="w-full h-[110px]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-full"
                    />
                  </div>
                  <div className="mt-[52px] mx-[10px] mb-3">
                    <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                    <h1 className="mt-[12px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                    <p className="text-[15px] opacity-70 mt-[4.5px]">30 October 2023</p>
                  </div>
                </div>
                <div className="flex flex-col w-[32%] cursor-pointer">
                  <div className="w-full h-[110px]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-full"
                    />
                  </div>
                  <div className="mt-[52px] mx-[10px] mb-3">
                    <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                    <h1 className="mt-[12px] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                    <p className="text-[15px] opacity-70 mt-[4.5px]">30 October 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Latest News */}
          <div className="ml-[20px]">
            <div>
              <h1 className="font-bold text-[21px] mb-[20px]">Latest News</h1>
                <div className="card-1">
                  <div className="flex">
                    <div className="w-[35%]">
                      <Image
                        src={Cars}
                        alt="cars"
                        className=""
                      />
                    </div>
                    <div className="ml-[10px] mt-[16px]">
                      <div className="w-fit bg-[#134074] text-white px-3 py-2 text-xs font-bold">Machine Learning</div>
                      <div className="mt-2 text-sm opacity-70 mx-auto">2 Days Ago</div>
                    </div>
                  </div>
                  <div className="mt-[13px]">
                    <h1 className="font-bold text-[15px]">OpenCV 6 Update Now Support Fast Object Detection.</h1>
                    <p className="text-[12px] mt-1 opacity-70">In OpenCV 6 update release, OpenCV latest feature can be integrated into a camera with high fps. Such as Nikon 3000 and Canon...</p>
                  </div>
                </div>
                <div className="card-2 mt-[23px]">
                  <div className="flex">
                    <div className="w-[35%]">
                      <Image
                        src={Cars}
                        alt="cars"
                        className=""
                      />
                    </div>
                    <div className="ml-[10px] mt-[16px]">
                      <div className="w-fit bg-[#134074] text-white px-3 py-2 text-xs font-bold">Machine Learning</div>
                      <div className="mt-2 text-sm opacity-70 mx-auto">2 Days Ago</div>
                    </div>
                  </div>
                  <div className="mt-[13px]">
                    <h1 className="font-bold text-[15px]">OpenCV 6 Update Now Support Fast Object Detection.</h1>
                    <p className="text-[12px] mt-1 opacity-70">In OpenCV 6 update release, OpenCV latest feature can be integrated into a camera with high fps. Such as Nikon 3000 and Canon...</p>
                  </div>
              </div>
            </div>
            <div className="mt-[35px]">
              <h1 className="font-bold text-[21px] mb-[20px]">Tweets</h1>
              <div className="card-1 mb-[30px]">
                <div className="flex">
                  <div className="w-[50px] h-[50px]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-fit h-full object-cover"
                    />
                  </div>
                  <div className="ml-[10px]">
                    <p className="font-bold">@wang_lichen44</p>
                    <p className="mt-1 text-sm opacity-70">2 Days Ago</p>
                  </div>
                </div>
                <div className="mt-[25px]">
                  <p className="text-[12px] opacity-70">We delighted to announce that Dataxperience just open a new office branch in Ho Chi Minh City, Vietnam. We hiring 20 data enthusiast...</p>
                </div>
              </div>
              <div className="card-1">
                <div className="flex">
                  <div className="w-[50px] h-[50px]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-fit h-full object-cover"
                    />
                  </div>
                  <div className="ml-[10px]">
                    <p className="font-bold">@wang_lichen44</p>
                    <p className="mt-1 text-sm opacity-70">2 Days Ago</p>
                  </div>
                </div>
                <div className="mt-[25px]">
                  <p className="text-[12px] opacity-70">We delighted to announce that Dataxperience just open a new office branch in Ho Chi Minh City, Vietnam. We hiring 20 data enthusiast...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
