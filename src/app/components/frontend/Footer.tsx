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
        <div className="w-[82%] justify-between py-[60px] mx-auto sm:flex block">
          <div className="">
            <div className="flex justify-center sm:block sm:w-[57%] w-[100%]">
              <Image
                src={LogoWhite}
                alt="Logo White"
                className="w-fit object-cover my-auto"
              />
            </div>
            <div className="flex justify-center sm:block">
              <div className="social-media sm:w-[38%] w-[60%] flex justify-between sm:ml-[5px] ml-0 sm:my-[20px] my-[10px] -mt-0 sm:-mt-0">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
                <FontAwesomeIcon icon={faTiktok} size="lg" />
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </div>
            </div>
            <div className="sm:w-[80%] w-[100%]">
              <p className="w-fit opacity-75 text-[13px] text-center sm:text-left">Xin Cheng Zhong Lu, Dong Guan Shi, Guang Dong Sheng, China, 523070</p>
              <div className="sm:w-[60%] w-[100%] my-[10px]">
                <hr className="opacity-75" />
              </div>
              <p className="w-fit opacity-75 text-[13px] text-center sm:text-left">Part Of Jawaraat Innovation Group - Copyright &copy; 2024</p>
            </div>
          </div>
          <div className="sm:flex sm:w-[52%] w-[100%] justify-between grid grid-cols-2 gap-4 sm:mt-0 mt-6">
            <div>
              <h1 className="font-bold text-[18px] mb-[10px]">Category</h1>
              <Link href="/categories#data_analytics">
                <p className="text-[12px] opacity-75 mb-1">Data Analytics</p>
              </Link>
              <Link href="/categories#data_science">
                <p className="text-[12px] opacity-75 mb-1">Data Science</p>
              </Link>
              <Link href="/categories#data_engineering">
                <p className="text-[12px] opacity-75 mb-1">Data Engineering</p>
              </Link>
              <Link href="/categories#data_ai">
                <p className="text-[12px] opacity-75 mb-1">Artificial Intelligence</p>
              </Link>
              <Link href="/categories#machine_learning">
                <p className="text-[12px] opacity-75 mb-1">Machine Learning</p>
              </Link>
              <Link href="/categories#inspirational">
                <p className="text-[12px] opacity-75 mb-1">Inspirational</p>
              </Link>
              <Link href="/categories#true_story">
                <p className="text-[12px] opacity-75 mb-1">True Story</p>
              </Link>
              <Link href="/categories#cloud_computing">
                <p className="text-[12px] opacity-75 mb-1">Cloud Computing</p>
              </Link>
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
              <Link href="/contact-us#cs">
                <p className="text-[12px] opacity-75 mb-1">Customer Service</p>
              </Link>
            </div>
          </div>
        </div>
      </footer>
  )
}
