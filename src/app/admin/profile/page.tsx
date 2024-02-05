"use client"

import AdminNavbar from "../../components/backend/AdminNavbar"
import AdminSideBar from "../../components/backend/AdminSideBar"
import '../../../../public/styles/style.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faEllipsisVertical, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Profile from "../../images/blank_profile.jpeg"
import { useRouter } from "next/navigation"
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { Chart } from "react-google-charts"

export default function StatsPage() {
    const data = [
        [
            "Element",
            "Density",
            { role: "style" },
            {
                sourceColumn: 0,
                role: "annotation",
                type: "string",
                calc: "stringify",
            },
        ],
        ["Cloud Computing", 8.94, "#b87333", null],
        ["Inspirational", 10.49, "silver", null],
        ["ML", 19.3, "gold", null],
        ["AI", 21.45, "color: #e5e4e2", null],
    ]

    const options = {
        title: "Content Interest",
        width: 500,
        height: 250,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
    }

    const data2 = [
        ["Year", "Sales", "Expenses"],
        ["2004", 1000, 400],
        ["2005", 1170, 460],
        ["2006", 660, 1120],
        ["2007", 1030, 540],
    ]

    const options2 = {
        title: "Company Performance",
        curveType: "function",
        width: 500,
        height: 250,
        legend: { position: "bottom" },
    }

    return (
        <div className='flex w-full '>
            <AdminSideBar />
            <main className="ml-[19vw] w-full h-full">
                <AdminNavbar />
                <h1 className="mx-auto sm:w-[91%] w-[86%] text-[25px] font-bold my-8 ">Change Profile</h1>
                <section className="flex mx-auto sm:w-[91%] w-[86%] mb-[90px] justify-between mt-[40px] sm:flex-row flex-col">
                    <div className="mx-auto sm:w-[30%] w-[100%]">
                        <div className="flex items-center justify-center sm:mr-16 mr-0">
                            <div className="text-center">
                                <Image
                                    src={Profile}
                                    alt="profile"
                                    width={250}
                                    height={250}
                                    className="rounded-full mx-auto"
                                />
                                <button type="button" className="text-white bg-[#343434] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-5">
                                    Change Profile Photo
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-[55%] w-[100%] sm:mt-0 mt-5">
                        <form className="mx-auto">
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter your name" required autoComplete="off"/>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter your email" required autoComplete="off"/>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Change password</label>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required placeholder="Enter your password" autoComplete="off"/>
                            </div>
                            <div className="w-full flex justify-end">
                                <button type="submit" className="text-white bg-[#C22020] hover:bg-[#a01b1b] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Update Profile</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}
