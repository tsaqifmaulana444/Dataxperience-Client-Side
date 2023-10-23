import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faCircleHalfStroke, faMessage, faCaretDown } from "@fortawesome/free-solid-svg-icons"
config.autoAddCss = false
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Profile from "../../images/blank_profile.jpeg"

export default function AdminNavbar() {
    return (
        <div className="bg-[#FFFFFF] w-full h-[10vh] flex">
            <input type="text" className="bg-[#d1d4dd] rounded-md w-[20vw] h-[6vh] mt-3.5 ml-[3vw]" />
            <div className="flex ml-[27vw] w-[27vw] justify-between my-auto">
                <FontAwesomeIcon icon={faCircleHalfStroke} style={{ color: "#d1d4dd" }} size="xl" className="my-auto" />
                <FontAwesomeIcon icon={faMessage} style={{ color: "#d1d4dd" }} size="xl" className="my-auto" />
                <div className="flex">
                    <div className="w-[4vw]">
                        <Image
                            src={Profile}
                            alt="User"
                            className="rounded-full p-1 w-fit"
                        />
                    </div>
                    <div className="ml-[0.3vw]">
                        <div className="flex justify-between mt-1">
                            <p className="font-semibold">李晨往</p>
                            <FontAwesomeIcon icon={faCaretDown} style={{ color: "#141414" }} className="mr-[1.5vw]" />
                        </div>
                        <p className="text-[14px]">wanglichen@dataxperience.sea</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
