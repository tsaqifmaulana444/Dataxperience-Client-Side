import Image from "next/image"
import Link from 'next/link'
import LogoWhite from "../../images/logo-white.png"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin, faTiktok, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer className="bg-[#343434] text-white">
        <div className="w-[82%] flex justify-between py-[60px] mx-auto">
          <div className="">
            <div className="w-[57%]">
              <Image
                src={LogoWhite}
                alt="Logo White"
                className="w-fit object-cover"
              />
            </div>
            <div className="social-media w-[38%] flex justify-between ml-[5px] my-[20px]">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
              <FontAwesomeIcon icon={faTiktok} size="lg" />
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </div>
            <div className="w-[80%]">
              <p className="w-fit opacity-75 text-[13px]">Xin Cheng Zhong Lu, Dong Guan Shi, Guang Dong Sheng, China, 523070</p>
              <div className="w-[60%] my-[10px]">
                <hr className="opacity-75" />
              </div>
              <p className="w-fit opacity-75 text-[13px]">Part Of Jawaraat Innovation Group - Copyright &copy; 2024</p>
            </div>
          </div>
          <div className="flex w-[52%] justify-between">
            <div>
              <h1 className="font-bold text-[18px] mb-[10px]">Category</h1>
              <p className="text-[12px] opacity-75 mb-1">Data Analytics</p>
              <p className="text-[12px] opacity-75 mb-1">Data Engineering</p>
              <p className="text-[12px] opacity-75 mb-1">Data Science</p>
              <p className="text-[12px] opacity-75 mb-1">Artificial Intelligence</p>
              <p className="text-[12px] opacity-75 mb-1">Machine Learning</p>
              <p className="text-[12px] opacity-75 mb-1">Inspirational</p>
              <p className="text-[12px] opacity-75 mb-1">True Story</p>
            </div>
            <div>
              <h1 className="font-bold text-[18px] mb-[10px]">Feedback</h1>
              <Link href="/contact-us">
                <p className="text-[12px] opacity-75 mb-1">Contact Us</p>
              </Link>
              <Link href="/contact-us">
                <p className="text-[12px] opacity-75 mb-1">Cricits</p>
              </Link>
              <Link href="/contact-us">
                <p className="text-[12px] opacity-75 mb-1">Suggestion</p>
              </Link>
              <Link href="/contact-us">
                <p className="text-[12px] opacity-75 mb-1">Rate Us</p>
              </Link>
            </div>
            <div>
              <h1 className="font-bold text-[18px] mb-[10px]">Privacy & Policy</h1>
              <p className="text-[12px] opacity-75 mb-1">Terms & Condition</p>
              <p className="text-[12px] opacity-75 mb-1">How We Get The News</p>
              <p className="text-[12px] opacity-75 mb-1">FAQ</p>
            </div>
            <div>
              <h1 className="font-bold text-[18px] mb-[10px]">Sponsorship</h1>
              <p className="text-[12px] opacity-75 mb-1">Customer Service</p>
              <p className="text-[12px] opacity-75 mb-1">Price List</p>
              <p className="text-[12px] opacity-75 mb-1">Sponsorship Contract</p>
            </div>
          </div>
        </div>
      </footer>
  )
}
