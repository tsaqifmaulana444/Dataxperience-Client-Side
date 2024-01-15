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
        ["Copper", 8.94, "#b87333", null],
        ["Silver", 10.49, "silver", null],
        ["Gold", 19.3, "gold", null],
        ["Platinum", 21.45, "color: #e5e4e2", null],
    ]

    const options = {
        title: "Density of Precious Metals, in g/cm^3",
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
                <div className="flex w-[75vw] mt-[7vh] justify-between mx-[3vw]">
                    <h1 className="font-bold text-[24px]">Statistic</h1>
                </div>
                <div className="grid grid-cols-2 mx-[3vw] mt-[2vh]">
                    <div className="bg-white w-[37vw] h-[40vh] rounded-md">
                        <div className="w-[200px] h-[200px]">
                            <CircularProgressbar
                                value={60}
                                strokeWidth={50}
                                styles={buildStyles({
                                    strokeLinecap: "butt"
                                })}
                            />
                        </div>
                    </div>
                    <div className="bg-white w-[37vw] h-[40vh] rounded-md ml-[0.6vw]">
                        <div className="w-[200px] h-[200px]">
                            <CircularProgressbar
                                value={70}
                                text={`70%`}
                                strokeWidth={5}
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                    textColor: "red",
                                    pathColor: "turquoise",
                                    trailColor: "gold"
                                })}
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 mx-[3vw] mt-[2vh] mb-[40px]">
                    <div className="bg-white w-[37vw] h-[40vh] rounded-md">
                        <div className="w-fit mx-auto my-auto mt-3">
                            <Chart
                                chartType="BarChart"
                                data={data}
                                options={options}
                            />
                        </div>
                    </div>
                    <div className="bg-white w-[37vw] h-[40vh] rounded-md ml-[0.6vw]">
                        <div className="w-fit mx-auto my-auto mt-1">
                            <Chart
                                chartType="LineChart"
                                data={data2}
                                options={options2}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
