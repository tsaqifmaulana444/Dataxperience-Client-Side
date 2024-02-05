import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Link from "next/link"
config.autoAddCss = false
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Profile from "../../images/blank_profile.jpeg"

export default function AdminNavbar() {
    return (
        <div className="bg-[#FFFFFF] w-full h-[10vh] flex">
            <input type="text" className="bg-[#dddfe4] rounded-md w-[20vw] h-[6vh] mt-3.5 ml-[3vw] pl-[1vw] border-transparent" placeholder='Search'/>
            <div className="flex w-[27vw] justify-between my-auto">
                <Link href="/admin/profile">
                    <div className="flex ml-[34vw]">
                        <div className="w-[4vw]">
                            <Image
                                src={Profile}
                                alt="User"
                                className="rounded-full p-1 w-fit"
                            />
                        </div>
                        <div className="ml-[0.3vw]">
                            <div className="flex justify-between mt-1">
                                <p className="font-semibold">李晓天</p>
                            </div>
                            <p className="text-[14px]">wangxiaotian@dataxperience.sea</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
