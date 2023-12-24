import Link from 'next/link'
import Logo from "../../images/logo.png"
import Image from "next/image"
import Profile from "../../images/blank_profile.jpeg"
import Hamburger from "../../images/hamburger.png"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    return (
        <div className="flex justify-between text-[#141414] sm:w-[83%] w-[90%] mx-auto">
            <div className="sm:w-[230px] w-[180px] my-auto cursor-pointer sm:mt-[15px] mt-[20px]">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Logo"
                        className="w-full"
                        priority
                    />
                </Link>
            </div>
            <div className="sm:flex hidden text-[#141414] w-[52%] justify-between text-sm text-center mt-[25px] font-medium">
                <Link href="/categories">Inspirational</Link>
                <p>Data Analytics</p>
                <p>Data Science</p>
                <p>AI</p>
                <p>ML</p>
                <p>Cloud Computing</p>
                <div className="w-fit flex">
                    <p>More</p>
                    <FontAwesomeIcon icon={faCaretDown} style={{ color: "#141414", }} className="ml-[12px]" />
                </div>
            </div>
            <div className="sm:flex hidden ml-[55px] mt-1">
                <div className="w-fit my-3">
                    <Image
                        src={Profile}
                        alt="User"
                        width={35}
                        height={35}
                        className="rounded-full"
                    />
                </div>
                <div className="my-auto w-fit ml-[20px]">
                    <p className="font-bold text-base">Not Signed In</p>
                    <Link href="/sign-in" className="underline -mt-1 text-sm cursor-pointer font-medium">
                        Sign In
                    </Link>
                </div>
            </div>
            <div className="sm:hidden block mt-[25px]">
                <Image
                    src={Hamburger}
                    alt="hamburger"
                    width={20}
                    height={20}
                    className=""
                />
            </div>
        </div>
    )
}
