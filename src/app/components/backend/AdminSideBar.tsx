import LogoWhite from "../../images/logo-white.png"
import Image from "next/image"
import { config, icon } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBug, faChartSimple, faHouse, faList, faNewspaper, faGear, faCircleInfo } from "@fortawesome/free-solid-svg-icons"

export default function AdminSideBar() {
    return (
        <aside className='bg-[#57504D] w-[19vw] h-full fixed text-white'>
            <div className="w-[14vw] mx-auto">
                <Image
                    src={LogoWhite}
                    alt="Logo White"
                    className="w-full mt-[4vh]"
                />
                <div className="bg-white w-[12vw] h-[0.1vh] mx-auto mt-[1vh] opacity-60"></div>
            </div>
            <div className="flex flex-col w-[14vw] mx-auto mt-[4vh] h-[37vh] justify-between">
                <div className="flex cursor-pointer">
                    <div className="bg-[#776F6B] px-2 py-1.5 rounded-md">
                        <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff" }} />
                    </div>
                    <p className="text-[14px] font-semibold my-auto ml-[0.6vw]">Home</p>
                </div>
                <div className="flex cursor-pointer">
                    <div className="px-2 py-1.5 rounded-md">
                        <FontAwesomeIcon icon={faNewspaper} style={{ color: "#ffffff" }} />
                    </div>
                    <p className="text-[14px] font-semibold my-auto ml-[0.7vw]">News Page</p>
                </div>
                <div className="flex cursor-pointer">
                    <div className="px-2 py-1.5 rounded-md">
                        <FontAwesomeIcon icon={faChartSimple} style={{ color: "#ffffff" }} />
                    </div>
                    <p className="text-[14px] font-semibold my-auto ml-[0.9vw]">Statistic</p>
                </div>
                <div className="flex cursor-pointer">
                    <div className="px-2 py-1.5 rounded-md">
                        <FontAwesomeIcon icon={faList} style={{ color: "#ffffff" }} />
                    </div>
                    <p className="text-[14px] font-semibold my-auto ml-[0.7vw]">Categories</p>
                </div>
                <div className="flex cursor-pointer">
                    <div className="px-2 py-1.5 rounded-md">
                        <FontAwesomeIcon icon={faBug} style={{ color: "#ffffff" }} />
                    </div>
                    <p className="text-[14px] font-semibold my-auto ml-[0.7vw]">Report Problem</p>
                </div>
            </div>
            <div className="flex flex-col w-[14vw] mx-auto mt-[31vh] h-[12vh] justify-between">
                <div className="flex cursor-pointer">
                    <div className="px-2 py-1.5 rounded-md">
                        <FontAwesomeIcon icon={faGear} style={{ color: "#ffffff" }} />
                    </div>
                    <p className="text-[14px] font-semibold my-auto ml-[0.7vw]">Settings</p>
                </div>
                <div className="flex cursor-pointer">
                    <div className="px-2 py-1.5 rounded-md">
                        <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#ffffff" }} />
                    </div>
                    <p className="text-[14px] font-semibold my-auto ml-[0.7vw]">About</p>
                </div>
            </div>
        </aside>
    )
}
