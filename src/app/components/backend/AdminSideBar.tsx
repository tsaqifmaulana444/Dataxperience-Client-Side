"use client"

import LogoWhite from "../../images/logo-white.png"
import Image from "next/image"
import { config, icon } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBug, faUser, faChartSimple, faHouse, faList, faNewspaper, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation'

export default function AdminSideBar() {
    const currentRoute = usePathname()
    const router = useRouter()

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/sign-out', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (response.ok) {
                router.push('/')
            } else {
                const data = await response.json()
            }
        } catch (error) {
            console.error('Logout error:', error)
        }
    }
    return (
        <aside className='bg-[#262524] w-[19vw] h-full fixed text-white'>
            <div className="w-[14vw] mx-auto">
                <Image
                    src={LogoWhite}
                    alt="Logo White"
                    className="w-full mt-[4vh]"
                />
                <div className="bg-white w-[12vw] h-[0.1vh] mx-auto mt-[0vh] opacity-60"></div>
            </div>
            <div className="flex flex-col w-[14vw] mx-auto mt-[4vh] h-[37vh] justify-between">
                <Link href={"/admin"}>
                    <div className="flex cursor-pointer">
                        <div className={currentRoute === "/admin" ? "bg-[#525252] p-2 rounded-md" : "p-2 rounded-md"}>
                            <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff" }} />
                        </div>
                        <p className="text-[14px] font-semibold my-auto ml-[0.6vw]">Home</p>
                    </div>
                </Link>
                <Link href={"/admin/news"}>
                    <div className="flex cursor-pointer">
                        <div className={currentRoute === "/admin/news" ? "bg-[#525252] p-2 rounded-md" : "p-2 rounded-md"}>
                            <FontAwesomeIcon icon={faNewspaper} style={{ color: "#ffffff" }} />
                        </div>
                        <p className="text-[14px] font-semibold my-auto ml-[0.7vw]">News Page</p>
                    </div>
                </Link>
                <Link href={"/admin/statistic"}>
                    <div className="flex cursor-pointer">
                        <div className={currentRoute === "/admin/statistic" ? "bg-[#525252] p-2 rounded-md" : "p-2 rounded-md"}>
                            <FontAwesomeIcon icon={faChartSimple} style={{ color: "#ffffff" }} />
                        </div>
                        <p className="text-[14px] font-semibold my-auto ml-[0.9vw]">Statistic</p>
                    </div>
                </Link>
                <Link href={"/admin/categories"}>
                    <div className="flex cursor-pointer">
                        <div className={currentRoute === "/admin/categories" ? "bg-[#525252] p-2 rounded-md" : "p-2 rounded-md"}>
                            <FontAwesomeIcon icon={faList} style={{ color: "#ffffff" }} />
                        </div>
                        <p className="text-[14px] font-semibold my-auto ml-[0.7vw]">Categories</p>
                    </div>
                </Link>
                <Link href={"/admin/create"}>
                    <div className="flex cursor-pointer">
                        <div className={currentRoute === "/admin/create" ? "bg-[#525252] p-2 rounded-md" : "p-2 rounded-md"}>
                            <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} />
                        </div>
                        <p className="text-[14px] font-semibold my-auto ml-[0.7vw]">Create Account</p>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col w-[14vw] mx-auto mt-[38vh] h-[12vh] justify-between">
                <button onClick={handleLogout}>
                    <div className="flex cursor-pointer">
                        <div className="px-2 py-1.5 rounded-md">
                            <FontAwesomeIcon icon={faRightFromBracket} style={{ color: "#ffffff" }}/>
                        </div>
                        <p className="text-[14px] font-semibold my-auto ml-[0.7vw]">Logout</p>
                    </div>
                </button>
            </div>
        </aside>
    )
}
