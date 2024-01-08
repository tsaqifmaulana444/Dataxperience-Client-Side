import Navbar from "../components/frontend/Navbar"
import Footer from "../components/frontend/Footer"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

export const metadata = {
  title: 'Contact | Dataxperience'
}

export default function page() {
  return (
    <div>
      <Navbar />
      <section className="flex w-[82%] mx-auto mb-[90px] justify-between mt-[40px]">
        <div className="w-[30%] flex items-center">
          <div className="">
            <h1 className="font-bold text-[31px]">Let&apos;s discuss on something amazing</h1>
            <div className="mt-12">
              <div className="flex">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#141414" }} size="xl" />
                <p className="font-semibold text-[16px] ml-[10px]">cs@dataxperience.sea</p>
              </div>
              <div className="flex mt-[30px]">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#141414" }} size="xl" />
                <p className="font-semibold text-[16px] ml-[10px]">+ 86 199 1780 4454 (Wei Liao)</p>
              </div>
              <div className="flex mt-[30px]">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#141414" }} size="xl" />
                <p className="font-semibold text-[16px] ml-[10px]">+ 86 199 9337 4021 (Xiao Meiyu)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-md w-[52%] px-[2.5%]">
          <p className="font-bold text-[18px] mt-[25px]">I&apos;m interested in...</p>
          <form action="" className="mt-0">
            {/* ubah */}
            <div className="flex w-full px-[0.4vw]">
              <button className="bg-[#343434] text-white font-medium px-[1.5vw] h-[6vh] rounded-lg">Sponsorship</button>
              <button className="bg-[#ffffff] text-[#141414] font-medium px-[1.5vw] h-[6vh] rounded-lg border border-[#898989] ml-[2.3vw]">Contribute</button>
              <button className="bg-[#ffffff] text-[#141414] font-medium px-[1.1vw] h-[6vh] rounded-lg border border-[#898989] ml-[2.3vw]">Critics & Suggestion</button>
            </div>
            <div className="flex w-full px-[0.4vw] mt-[2.5vh]">
              <button className="bg-[#ffffff] text-[#141414] font-medium px-[1.5vw] h-[6vh] rounded-lg border border-[#898989]">Rate us</button>
              <button className="bg-[#ffffff] text-[#141414] font-medium px-[1.5vw] h-[6vh] rounded-lg border border-[#898989] ml-[2.3vw]">Apply as news author</button>
            </div>
            {/* ubah */}
            <div className="relative z-0 w-full mb-6 group mt-[20px]">
              <input type="name" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#141414] peer" placeholder=" " required />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#141414]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#141414] peer" placeholder=" " required />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#141414]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <textarea name="" id="" className="w-full h-[110px] border border-[#898989] rounded-md my-[20px] px-[10px]" placeholder="Your Message Here">

            </textarea>
            <button type="submit" className="bg-[#343434] text-white px-[15px] h-[40px] rounded-lg mb-[30px]">Send Message</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}
