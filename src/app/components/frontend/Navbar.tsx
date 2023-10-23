import Link from 'next/link'
import Logo from "../../images/logo.png"
import Image from "next/image"
import Profile from "../../images/blank_profile.jpeg"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    return (
        <div className="flex h-[9.3vh] bg-white text-[#141414]">
            <div className="ml-[8.7vw] w-[19vw] my-auto cursor-pointer">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Logo"
                        className=""
                        priority
                    />
                </Link>
            </div>
            <div className="flex text-[#141414] w-[45vw] justify-between text-sm text-center -ml-[1vw] mt-[3.3vh] font-medium">
                <Link href="/categories">Inspirational</Link>
                <p>Data Analytics</p>
                <p>Data Science</p>
                <p>AI</p>
                <p>ML</p>
                <p>Cloud Computing</p>
                <div className="w-fit flex">
                    <p>More</p>
                    <FontAwesomeIcon icon={faCaretDown} style={{ color: "#141414", }} className="ml-[0.8vw]" />
                </div>
            </div>
            <div className="flex ml-[8.5vw] mt-1">
                <div className="w-fit h-[5vh] my-3">
                    <Image
                        src={Profile}
                        alt="User"
                        width={35}
                        height={35}
                        className="rounded-full"
                    />
                </div>
                <div className="my-auto w-fit ml-[1vw]">
                    <p className="font-bold text-base">Not Signed In</p>
                    <Link href="/sign-in" className="underline -mt-1 text-sm cursor-pointer font-medium">
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    )
}
