import Image from "next/image"
import LogoWhite from "../../images/logo-white.png"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin, faTiktok, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer className="bg-[#343434] text-white">
        <div className="w-full flex px-[9vw] py-[7vh] mx-auto">
          <div className="">
            <div className="w-[17vw]">
              <Image
                src={LogoWhite}
                alt="Logo White"
                className="w-fit object-cover"
              />
            </div>
            <div className="social-media w-[10.5vw] flex justify-between ml-[0.5vw] mt-[1vh]">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
              <FontAwesomeIcon icon={faTiktok} size="lg" />
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </div>
            <div className="w-[25vw] mt-[3vh] ml-[0.5vw]">
              <p className="w-fit opacity-75 text-[13px]">Xin Cheng Zhong Lu, Dong Guan Shi, Guang Dong Sheng, China, 523070</p>
              <div className="w-[15vw] my-[1.5vh]">
                <hr className="opacity-75" />
              </div>
              <p className="w-fit opacity-75 text-[13px]">Part Of Jawaraat Innovation Group - Copyright &copy; 2023</p>
            </div>
          </div>
          <div className="flex w-[40vw] justify-between ml-[9vw]">
            <div>
              <h1 className="font-bold text-[18px] mb-[1vh]">Category</h1>
              <p className="text-[12px] opacity-75 mb-1">Data Analytics</p>
              <p className="text-[12px] opacity-75 mb-1">Data Engineering</p>
              <p className="text-[12px] opacity-75 mb-1">Data Science</p>
              <p className="text-[12px] opacity-75 mb-1">Artificial Intelligence</p>
              <p className="text-[12px] opacity-75 mb-1">Machine Learning</p>
              <p className="text-[12px] opacity-75 mb-1">Inspirational</p>
              <p className="text-[12px] opacity-75 mb-1">True Story</p>
            </div>
            <div>
              <h1 className="font-bold text-[18px] mb-[1vh]">Feedback</h1>
              <p className="text-[12px] opacity-75 mb-1">Contact Us</p>
              <p className="text-[12px] opacity-75 mb-1">Cricits</p>
              <p className="text-[12px] opacity-75 mb-1">Suggestion</p>
              <p className="text-[12px] opacity-75 mb-1">Rate Us</p>
            </div>
            <div>
              <h1 className="font-bold text-[18px] mb-[1vh]">Privacy & Policy</h1>
              <p className="text-[12px] opacity-75 mb-1">Terms & Condition</p>
              <p className="text-[12px] opacity-75 mb-1">How We Get The News</p>
              <p className="text-[12px] opacity-75 mb-1">FAQ</p>
            </div>
            <div>
              <h1 className="font-bold text-[18px] mb-[1vh]">Sponsorship</h1>
              <p className="text-[12px] opacity-75 mb-1">Customer Service</p>
              <p className="text-[12px] opacity-75 mb-1">Price List</p>
              <p className="text-[12px] opacity-75 mb-1">Sponsorship Contract</p>
            </div>
          </div>
        </div>
      </footer>
  )
}
