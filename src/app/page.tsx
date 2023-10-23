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
      <section className="mt-[7vh] text-[#141414]">
        <div className="mx-[8.7vw]">
          <h1 className="font-bold text-2xl">Welcome To Dataxpetrise!</h1>
          <p>We Discuss Everything About Data.</p>
        </div>
        <div className="ml-[8.7vw] flex mt-[2.5vh]">
          <div className="">
            <iframe width="792" height="392" src="https://www.youtube.com/embed/D2vj0WcvH5c?si=s4ErRK_Jv9hcUd6n" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          <div className="ml-[2.3vw] w-[21vw]">
            <div className="card-1">
              <div className="flex">
                <div className="w-[9vw] h-[5.8vh]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className=""
                  />
                </div>
                <div className="ml-[1vw] mt-[1.8vh]">
                  <div className="w-fit bg-[#134074] text-white px-3 py-2 text-xs font-bold">Machine Learning</div>
                  <div className="mt-2 text-sm opacity-70 ml-[0.3vw]">2 Days Ago</div>
                </div>
              </div>
              <div className="mt-[2.5vh]">
                <h1 className="font-bold text-[15px]">OpenCV 6 Update Now Support Fast Object Detection.</h1>
                <p className="text-[12px] mt-1 opacity-70">In OpenCV 6 update release, OpenCV latest feature can be integrated into a camera with high fps. Such as Nikon 3000 and Canon...</p>
              </div>
            </div>
            <div className="card-2 mt-[2.3vh]">
              <div className="flex">
                <div className="w-[9vw] h-[5.8vh]">
                  <Image
                    src={Cars}
                    alt="cars"
                    className=""
                  />
                </div>
                <div className="ml-[1vw] mt-[1.8vh]">
                  <div className="w-fit bg-[#134074] text-white px-3 py-2 text-xs font-bold">Machine Learning</div>
                  <div className="mt-2 text-sm opacity-70 ml-[0.3vw]">2 Days Ago</div>
                </div>
              </div>
              <div className="mt-[2.5vh]">
                <h1 className="font-bold text-[15px]">OpenCV 6 Update Now Support Fast Object Detection.</h1>
                <p className="text-[12px] mt-1 opacity-70">In OpenCV 6 update release, OpenCV latest feature can be integrated into a camera with high fps. Such as Nikon 3000 and Canon...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-[8.7vw] flex mt-[4vh] w-[80vw] justify-between">
          <Link href="/details">
            <div className="flex flex-col w-[19vw] cursor-pointer rounded-sm shadow-md">
              <div className="w-[19vw] h-[15.5vh]">
                <Image
                  src={Cars}
                  alt="cars"
                  className="w-full rounded-t-lg"
                />
              </div>
              <div className="mt-[8vh] mx-[1vw] p-1 mb-3">
                <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                <h1 className="mt-[2vh] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                <p className="text-[15px] opacity-70 mt-[1.5vh]">30 October 2023</p>
              </div>
            </div>
          </Link>
          <div className="flex flex-col w-[19vw] cursor-pointer rounded-sm shadow-md">
            <div className="w-[19vw] h-[15.5vh]">
              <Image
                src={Cars}
                alt="cars"
                className="w-full rounded-t-lg"
              />
            </div>
            <div className="mt-[8vh] mx-[1vw] p-1 mb-3">
              <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
              <h1 className="mt-[2vh] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
              <p className="text-[15px] opacity-70 mt-[1.5vh]">30 October 2023</p>
            </div>
          </div>
          <div className="flex flex-col w-[19vw] cursor-pointer rounded-sm shadow-md">
            <div className="w-[19vw] h-[15.5vh]">
              <Image
                src={Cars}
                alt="cars"
                className="w-full rounded-t-lg"
              />
            </div>
            <div className="mt-[8vh] mx-[1vw] p-1 mb-3">
              <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
              <h1 className="mt-[2vh] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
              <p className="text-[15px] opacity-70 mt-[1.5vh]">30 October 2023</p>
            </div>
          </div>
          <div className="flex flex-col w-[19vw] cursor-pointer rounded-sm shadow-md">
            <div className="w-[19vw] h-[15.5vh]">
              <Image
                src={Cars}
                alt="cars"
                className="w-full rounded-t-lg"
              />
            </div>
            <div className="mt-[8vh] mx-[1vw] p-1 mb-3">
              <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
              <h1 className="mt-[2vh] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
              <p className="text-[15px] opacity-70 mt-[1.5vh]">30 October 2023</p>
            </div>
          </div>
        </div>
      </section>
      {/* Advertisement Section*/}
      <section className="mx-[8.7vw] mt-[6vh] w-fit text-[#141414]">
        <h1 className="font-bold text-[21px]">Interesting</h1>
        <div className="flex mt-[2vh]">
          <div>
            <div className="flex">
              <div className="w-[31.5vw] h-[32vh]">
                <Image
                  src={Cars}
                  alt="cars"
                  className="w-full h-full"
                />
              </div>
              <div className="ml-[2vw] w-[25vw]">
                <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold mt-[2vh]">Inspirational</div>
                <h1 className="font-bold text-[17px] mt-[1vh]">A Story From Zambia, From Nothing To Work As Data Analyst In Her Country.</h1>
                <p className="text-[12px] opacity-70 mt-[1vh]">Today inspirational story came from a woman called Naomi Bonolo, She was born in the capital city of the country Lusaka. She was born poor without...</p>
                <p className="text-[17px] opacity-70 mt-[3vh]">1 Day Ago</p>
              </div>
            </div>
            <div className="flex mt-[4vh]">
              <div className="w-[31.5vw] h-[32vh]">
                <Image
                  src={Cars}
                  alt="cars"
                  className="w-full h-full"
                />
              </div>
              <div className="ml-[2vw] w-[25vw]">
                <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold mt-[2vh]">Inspirational</div>
                <h1 className="font-bold text-[17px] mt-[1vh]">A Story From Zambia, From Nothing To Work As Data Analyst In Her Country.</h1>
                <p className="text-[12px] opacity-70 mt-[1vh]">Today inspirational story came from a woman called Naomi Bonolo, She was born in the capital city of the country Lusaka. She was born poor without...</p>
                <p className="text-[17px] opacity-70 mt-[3vh]">1 Day Ago</p>
              </div>
            </div>
          </div>
          <div className="-mt-[7vh] ml-[2vw]">
            <p className="font-bold text-[21px]">Advertisement</p>
            <div className="w-[20vw] mt-[2vh]">
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
      <section className="mx-[8.7vw] mt-[6vh] w-fit text-[#141414] mb-24">
        <div className="flex">
          <div>
            <div>
              <h1 className="font-bold text-[21px] mb-[2vh]">Popular News</h1>
              <div className="w-[59.5vw] flex justify-between">
                <div className="flex flex-col w-[19vw] cursor-pointer rounded-sm shadow-md">
                  <div className="w-[19vw] h-[15.5vh]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-full rounded-t-lg"
                    />
                  </div>
                  <div className="mt-[8vh] mx-[1vw] p-1 mb-3">
                    <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                    <h1 className="mt-[2vh] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                    <p className="text-[15px] opacity-70 mt-[1.5vh]">30 October 2023</p>
                  </div>
                </div>
                <div className="flex flex-col w-[19vw] cursor-pointer rounded-sm shadow-md">
                  <div className="w-[19vw] h-[15.5vh]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-full rounded-t-lg"
                    />
                  </div>
                  <div className="mt-[8vh] mx-[1vw] p-1 mb-3">
                    <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                    <h1 className="mt-[2vh] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                    <p className="text-[15px] opacity-70 mt-[1.5vh]">30 October 2023</p>
                  </div>
                </div>
                <div className="flex flex-col w-[19vw] cursor-pointer rounded-sm shadow-md">
                  <div className="w-[19vw] h-[15.5vh]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-full rounded-t-lg"
                    />
                  </div>
                  <div className="mt-[8vh] mx-[1vw] p-1 mb-3">
                    <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                    <h1 className="mt-[2vh] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                    <p className="text-[15px] opacity-70 mt-[1.5vh]">30 October 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[4vh]">
              <h1 className="font-bold text-[21px] mb-[2vh]">Old News</h1>
              <div className="w-[59.5vw] flex justify-between">
                <div className="flex flex-col w-[19vw] cursor-pointer rounded-sm shadow-md">
                  <div className="w-[19vw] h-[15.5vh]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-full rounded-t-lg"
                    />
                  </div>
                  <div className="mt-[8vh] mx-[1vw] p-1 mb-3">
                    <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                    <h1 className="mt-[2vh] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                    <p className="text-[15px] opacity-70 mt-[1.5vh]">30 October 2023</p>
                  </div>
                </div>
                <div className="flex flex-col w-[19vw] cursor-pointer rounded-sm shadow-md">
                  <div className="w-[19vw] h-[15.5vh]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-full rounded-t-lg"
                    />
                  </div>
                  <div className="mt-[8vh] mx-[1vw] p-1 mb-3">
                    <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                    <h1 className="mt-[2vh] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                    <p className="text-[15px] opacity-70 mt-[1.5vh]">30 October 2023</p>
                  </div>
                </div>
                <div className="flex flex-col w-[19vw] cursor-pointer rounded-sm shadow-md">
                  <div className="w-[19vw] h-[15.5vh]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-full rounded-t-lg"
                    />
                  </div>
                  <div className="mt-[8vh] mx-[1vw] p-1 mb-3">
                    <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                    <h1 className="mt-[2vh] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                    <p className="text-[15px] opacity-70 mt-[1.5vh]">30 October 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[4vh]">
              <h1 className="font-bold text-[21px] mb-[2vh]">All News</h1>
              <div className="w-[59.5vw] flex justify-between">
                <div className="flex flex-col w-[19vw] cursor-pointer rounded-sm shadow-md">
                  <div className="w-[19vw] h-[15.5vh]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-full rounded-t-lg"
                    />
                  </div>
                  <div className="mt-[8vh] mx-[1vw] p-1 mb-3">
                    <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                    <h1 className="mt-[2vh] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                    <p className="text-[15px] opacity-70 mt-[1.5vh]">30 October 2023</p>
                  </div>
                </div>
                <div className="flex flex-col w-[19vw] cursor-pointer rounded-sm shadow-md">
                  <div className="w-[19vw] h-[15.5vh]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-full rounded-t-lg"
                    />
                  </div>
                  <div className="mt-[8vh] mx-[1vw] p-1 mb-3">
                    <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                    <h1 className="mt-[2vh] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                    <p className="text-[15px] opacity-70 mt-[1.5vh]">30 October 2023</p>
                  </div>
                </div>
                <div className="flex flex-col w-[19vw] cursor-pointer rounded-sm shadow-md">
                  <div className="w-[19vw] h-[15.5vh]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-full rounded-t-lg"
                    />
                  </div>
                  <div className="mt-[8vh] mx-[1vw] p-1 mb-3">
                    <div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
                    <h1 className="mt-[2vh] text-[15px] font-bold leading-6">Meet Zhang Fengxiao, Inspirational ML Engineer At Google Cloud.</h1>
                    <p className="text-[15px] opacity-70 mt-[1.5vh]">30 October 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Latest News */}
          <div className="ml-[2.1vw]">
            <div>
              <h1 className="font-bold text-[21px] mb-[2vh]">Latest News</h1>
              <div className="card-1 mb-[3vh]">
                <div className="flex">
                  <div className="w-[9vw] h-[5.8vh]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className=""
                    />
                  </div>
                  <div className="ml-[1vw] mt-[1.8vh]">
                    <div className="w-fit bg-[#134074] text-white px-3 py-2 text-xs font-bold">Machine Learning</div>
                    <div className="mt-2 text-sm opacity-70 ml-[0.3vw]">2 Days Ago</div>
                  </div>
                </div>
                <div className="mt-[2.5vh]">
                  <h1 className="font-bold text-[15px]">OpenCV 6 Update Now Support Fast Object Detection.</h1>
                  <p className="text-[12px] mt-1 opacity-70">In OpenCV 6 update release, OpenCV latest feature can be integrated into a camera with high fps. Such as Nikon 3000 and Canon...</p>
                </div>
              </div>
              <div className="card-1">
                <div className="flex">
                  <div className="w-[9vw] h-[5.8vh]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className=""
                    />
                  </div>
                  <div className="ml-[1vw] mt-[1.8vh]">
                    <div className="w-fit bg-[#134074] text-white px-3 py-2 text-xs font-bold">Machine Learning</div>
                    <div className="mt-2 text-sm opacity-70 ml-[0.3vw]">2 Days Ago</div>
                  </div>
                </div>
                <div className="mt-[2.5vh]">
                  <h1 className="font-bold text-[15px]">OpenCV 6 Update Now Support Fast Object Detection.</h1>
                  <p className="text-[12px] mt-1 opacity-70">In OpenCV 6 update release, OpenCV latest feature can be integrated into a camera with high fps. Such as Nikon 3000 and Canon...</p>
                </div>
              </div>
            </div>
            <div className="mt-[4vh]">
              <h1 className="font-bold text-[21px] mb-[2vh]">Tweets</h1>
              <div className="card-1 mb-[3vh]">
                <div className="flex">
                  <div className="w-[8vw] h-[8vh]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-fit h-full object-cover"
                    />
                  </div>
                  <div className="-ml-[1vw]">
                    <p className="font-bold">@wang_lichen44</p>
                    <p className="mt-1 text-sm opacity-70 ml-[0.3vw]">2 Days Ago</p>
                  </div>
                </div>
                <div className="mt-[2.5vh]">
                  <p className="text-[12px] opacity-70">We delighted to announce that Dataxperience just open a new office branch in Ho Chi Minh City, Vietnam. We hiring 20 data enthusiast...</p>
                </div>
              </div>
              <div className="card-1">
                <div className="flex">
                  <div className="w-[8vw] h-[8vh]">
                    <Image
                      src={Cars}
                      alt="cars"
                      className="w-fit h-full object-cover"
                    />
                  </div>
                  <div className="-ml-[1vw]">
                    <p className="font-bold">@wang_lichen44</p>
                    <p className="mt-1 text-sm opacity-70 ml-[0.3vw]">2 Days Ago</p>
                  </div>
                </div>
                <div className="mt-[2.5vh]">
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
