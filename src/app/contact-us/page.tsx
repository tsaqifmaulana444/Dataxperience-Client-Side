"use client"

import Navbar from "../components/frontend/Navbar"
import Footer from "../components/frontend/Footer"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

// export const metadata = {
//   title: 'Contact | Dataxperience'
// }

export default function page() {
  return (
    <div>
      <Navbar />
      <section className="flex sm:w-[82%] w-[86%] mx-auto mb-[90px] justify-between mt-[40px] sm:flex-row flex-col">
        <div className="sm:w-[30%] w-[100%] flex items-center">
          <div className="">
            <h1 className="font-bold sm:text-[31px] text-[25px]">Let&apos;s discuss on something amazing</h1>
            <div className="mt-12">
              <div className="flex" id="cs">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#141414" }} size="xl" />
                <p className="font-semibold sm:text-[16px] text-[13px] ml-[10px]">cs@dataxperience.sea</p>
              </div>
              <div className="flex mt-[30px]">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#141414" }} size="xl" />
                <p className="font-semibold sm:text-[16px] text-[13px] ml-[10px]">+ 86 199 1780 4454 (Wei Liao)</p>
              </div>
              <div className="flex mt-[30px]">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#141414" }} size="xl" />
                <p className="font-semibold sm:text-[16px] text-[13px] ml-[10px]">+ 86 199 9337 4021 (Xiao Meiyu)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-md sm:w-[52%] w-[100%] sm:px-[2.5%] px-[20px] sm:mt-0 mt-7">
          <p className="font-bold text-[18px] mt-[25px]">What do you want to tell...</p>
          <form action="" className="mt-0">
            <div className="flex sm:flex-row flex-col sm:mt-[20px] mt-[15px] justify-between w-[90%]">
              <div className="flex items-center sm:mt-0 mt-3">
                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900">Rate Us</label>
              </div>
              <div className="flex items-center sm:mt-0 mt-3">
                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900">Misinformation</label>
              </div>
              <div className="flex items-center sm:mt-0 mt-3">
                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900">Critics/Suggestions</label>
              </div>
            </div>
            
            <div className="relative z-0 w-full mb-6 group mt-[20px]">
              <input autoComplete="off" type="name" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#141414] peer" placeholder=" " required />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#141414]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
            </div>
            <div className="relative z-0 w-full sm:mb-6 mb-1 group">
              <input autoComplete="off" type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#141414] peer" placeholder=" " required />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#141414]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <textarea name="" id="" className="w-full sm:h-[110px] h-[120px] border border-[#898989] rounded-md my-[20px] px-[10px] sm:text-[15px] text-[14px]" placeholder="Your Message Here">
            </textarea>
            <button type="submit" className="bg-[#343434] text-white px-[15px] h-[40px] rounded-lg mb-[30px] sm:text-[15px] text-[12px]">Send Message</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}
