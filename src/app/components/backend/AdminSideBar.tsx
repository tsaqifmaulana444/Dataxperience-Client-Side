"use client"

import LogoWhite from "../../images/logo-white.png"
import Image from "next/image"
import { config, icon } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBug, faChartSimple, faHouse, faList, faNewspaper, faGear, faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation'

export default function AdminSideBar() {
    const currentRoute = usePathname()
    const router = useRouter()
    
    const handleLogout = () => {
        localStorage.removeItem("authToken");
      
        router.push('/');
      }
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
                <Link href={"/admin"}>
                    <div className="flex cursor-pointer">
                        <div className={currentRoute === "/admin" ? "bg-[#776F6B] px-2 py-1.5 rounded-md" : "px-2 py-1.5 rounded-md"}>
                            <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff" }} />
                        </div>
                        <p className="text-[14px] font-semibold my-auto ml-[0.6vw]">Home</p>
                    </div>
                </Link>
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
                <Link href={"/admin/categories"}>
                    <div className="flex cursor-pointer">
                    <div className={currentRoute === "/admin/categories" ? "bg-[#776F6B] px-2 py-1.5 rounded-md" : "px-2 py-1.5 rounded-md"}>
                            <FontAwesomeIcon icon={faList} style={{ color: "#ffffff" }} />
                        </div>
                        <p className="text-[14px] font-semibold my-auto ml-[0.7vw]">Categories</p>
                    </div>
                </Link>
                <Link href={"/admin/report"}>
                    <div className="flex cursor-pointer">
                    <div className={currentRoute === "/admin/report" ? "bg-[#776F6B] px-2 py-1.5 rounded-md" : "px-2 py-1.5 rounded-md"}>
                            <FontAwesomeIcon icon={faBug} style={{ color: "#ffffff" }} />
                        </div>
                        <p className="text-[14px] font-semibold my-auto ml-[0.7vw]">Report Problem</p>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col w-[14vw] mx-auto mt-[31vh] h-[12vh] justify-between">
                <div className="flex cursor-pointer">
                    <div className="px-2 py-1.5 rounded-md">
                        <FontAwesomeIcon icon={faGear} style={{ color: "#ffffff" }} />
                    </div>
                    <p className="text-[14px] font-semibold my-auto ml-[0.7vw]">Settings</p>
                </div>
                <button onClick={handleLogout}>
                    <div className="flex cursor-pointer">
                        <div className="px-2 py-1.5 rounded-md">
                            <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#ffffff" }} />
                        </div>
                        <p className="text-[14px] font-semibold my-auto ml-[0.7vw]">Logout</p>
                    </div>
                </button>
            </div>
        </aside>
    )
}
