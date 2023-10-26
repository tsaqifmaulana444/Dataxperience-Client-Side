import AdminNavbar from "../components/backend/AdminNavbar"
import AdminSideBar from "../components/backend/AdminSideBar"
import '../../../public/styles/style.css'
import Link from "next/link"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faEllipsisVertical, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Profile from "../images/blank_profile.jpeg"

export default function page() {
    return (
        <div className='flex w-full '>
            <AdminSideBar />
            <main className="ml-[19vw] w-full h-full">
                <AdminNavbar />
                <div className="flex w-[75vw] mt-[7vh] justify-between mx-[3vw]">
                    <h1 className="font-bold text-[24px]">Dashboard</h1>
                    <Link href="/admin/form">
                        <button className="bg-[#57504D] text-white p-2 rounded-md w-[9vw] text-[16px] font-medium">+ Add News</button>
                    </Link>
                </div>
                <div className="flex mx-[3vw] mt-[3vh]">
                    <div className="bg-white w-[18vw] h-[18vh] rounded-md">
                        <div className="mx-[1.5vw]">
                            <p className="text-[12px] opacity-70 font-semibold mt-[3.5vh]">Today Visitors</p>
                            <div className="flex mt-[2.5vh]">
                                <p className="text-[26px] font-bold">550</p>
                                <div className="flex ml-[0.7vw]">
                                    <p className="w-fit font-semibold text-green-500 my-auto text-[12px]">
                                        & 10%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-[18vw] h-[18vh] rounded-md ml-[1vw]">
                        <div className="mx-[1.5vw]">
                            <p className="text-[12px] opacity-70 font-semibold mt-[3.5vh]">Today Visitors</p>
                            <div className="flex mt-[2.5vh]">
                                <p className="text-[26px] font-bold">550</p>
                                <div className="flex ml-[0.7vw]">
                                    <p className="w-fit font-semibold text-green-500 my-auto text-[12px]">
                                        & 10%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-[18vw] h-[18vh] rounded-md ml-[1vw]">
                        <div className="mx-[1.5vw]">
                            <p className="text-[12px] opacity-70 font-semibold mt-[3.5vh]">Today Visitors</p>
                            <div className="flex mt-[2.5vh]">
                                <p className="text-[26px] font-bold">550</p>
                                <div className="flex ml-[0.7vw]">
                                    <p className="w-fit font-semibold text-green-500 my-auto text-[12px]">
                                        & 10%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-[18vw] h-[18vh] rounded-md ml-[1vw]">
                        <div className="mx-[1.5vw]">
                            <p className="text-[12px] opacity-70 font-semibold mt-[3.5vh]">Today Visitors</p>
                            <div className="flex mt-[2.5vh]">
                                <p className="text-[26px] font-bold">550</p>
                                <div className="flex ml-[0.7vw]">
                                    <p className="w-fit font-semibold text-green-500 my-auto text-[12px]">
                                        & 10%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 mx-[3vw] mt-[2vh] mb-[7vh]">
                    <div className="bg-white w-[37vw] h-[40vh] rounded-md"></div>
                    <div className="bg-white w-[37vw] h-[40vh] rounded-md ml-[0.6vw]"></div>
                    <div className="bg-white w-[37vw] h-[40vh] rounded-md mt-[2.2vh]">
                        <div className="flex w-full mx-[2vw] opacity-70 mt-[3vh] text-[16px] font-semibold">
                            <h1>Upcoming Agendas</h1>
                            <p className="ml-[19vw]">Add <FontAwesomeIcon icon={faPlus} style={{ color: "#141414" }} /></p>
                        </div>
                        <div className="mt-[2vh]">
                            <div className="flex w-[33vw] mx-[2vw]">
                                <div>
                                    <p className="font-semibold w-fit mx-auto text-[24px]">05</p>
                                    <p className="font-medium -mt-[0.8vh]">May</p>
                                </div>
                                <div className="ml-[1.3vw] mt-[1vh]">
                                    <p className="opacity-70 text-[14px] font-semibold">Full Day</p>
                                    <p className="font-semibold -ml-[0.1vw]">Business Expansion In Cambodia</p>
                                </div>
                                <FontAwesomeIcon icon={faEllipsisVertical} style={{ color: "#2e333e" }} className="ml-[10.7vw] my-auto" size="lg" />
                            </div>
                            <div className="flex w-[33vw] mx-[2vw] mt-2">
                                <div>
                                    <p className="font-semibold w-fit mx-auto text-[24px]">05</p>
                                    <p className="font-medium -mt-[0.8vh]">May</p>
                                </div>
                                <div className="ml-[1.3vw] mt-[1vh]">
                                    <p className="opacity-70 text-[14px] font-semibold">Full Day</p>
                                    <p className="font-semibold -ml-[0.1vw]">Business Expansion In Cambodia</p>
                                </div>
                                <FontAwesomeIcon icon={faEllipsisVertical} style={{ color: "#2e333e" }} className="ml-[10.7vw] my-auto" size="lg" />
                            </div>
                            <div className="flex w-[33vw] mx-[2vw] mt-2">
                                <div>
                                    <p className="font-semibold w-fit mx-auto text-[24px]">05</p>
                                    <p className="font-medium -mt-[0.8vh]">May</p>
                                </div>
                                <div className="ml-[1.3vw] mt-[1vh]">
                                    <p className="opacity-70 text-[14px] font-semibold">Full Day</p>
                                    <p className="font-semibold -ml-[0.1vw]">Business Expansion In Cambodia</p>
                                </div>
                                <FontAwesomeIcon icon={faEllipsisVertical} style={{ color: "#2e333e" }} className="ml-[10.7vw] my-auto" size="lg" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-[37vw] h-[40vh] rounded-md mt-[2.2vh] ml-[0.6vw]">
                        <div className="flex w-full mx-[2vw] opacity-70 mt-[3vh] text-[16px] font-semibold">
                            <h1>Sponsorship Request</h1>
                        </div>
                        <div className="mt-[3vh]">
                            <div className="flex mx-[2vw]">
                                <Image
                                    src={Profile}
                                    alt="profile"
                                    className="rounded-full w-[3.5vw]"
                                />
                                <div className="ml-[1vw]">
                                    <p className="opacity-70 text-[14px] font-semibold">Freecodecamp</p>
                                    <p className="font-semibold">3 Months Contract Offer</p>
                                </div>
                                <div className="flex ml-[2.5vw]">
                                    <div className="flex text-red-600 my-auto cursor-pointer">
                                        <FontAwesomeIcon icon={faXmark} size="xl"/>
                                        <p className="text-[15px] ml-[0.3vw]">Decline</p>
                                    </div>
                                    <div className="flex text-green-500 my-auto ml-[1vw] cursor-pointer">
                                        <FontAwesomeIcon icon={faCheck} size="xl"/>
                                        <p className="text-[15px] ml-[0.3vw]">Accept</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mx-[2vw] mt-[2vh]">
                                <Image
                                    src={Profile}
                                    alt="profile"
                                    className="rounded-full w-[3.5vw]"
                                />
                                <div className="ml-[1vw]">
                                    <p className="opacity-70 text-[14px] font-semibold">Freecodecamp</p>
                                    <p className="font-semibold">3 Months Contract Offer</p>
                                </div>
                                <div className="flex ml-[2.5vw]">
                                    <div className="flex text-red-600 my-auto cursor-pointer">
                                        <FontAwesomeIcon icon={faXmark} size="xl"/>
                                        <p className="text-[15px] ml-[0.3vw]">Decline</p>
                                    </div>
                                    <div className="flex text-green-500 my-auto ml-[1vw] cursor-pointer">
                                        <FontAwesomeIcon icon={faCheck} size="xl"/>
                                        <p className="text-[15px] ml-[0.3vw]">Accept</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mx-[2vw] mt-[2vh]">
                                <Image
                                    src={Profile}
                                    alt="profile"
                                    className="rounded-full w-[3.5vw]"
                                />
                                <div className="ml-[1vw]">
                                    <p className="opacity-70 text-[14px] font-semibold">Freecodecamp</p>
                                    <p className="font-semibold">3 Months Contract Offer</p>
                                </div>
                                <div className="flex ml-[2.5vw]">
                                    <div className="flex text-red-600 my-auto cursor-pointer">
                                        <FontAwesomeIcon icon={faXmark} size="xl"/>
                                        <p className="text-[15px] ml-[0.3vw]">Decline</p>
                                    </div>
                                    <div className="flex text-green-500 my-auto ml-[1vw] cursor-pointer">
                                        <FontAwesomeIcon icon={faCheck} size="xl"/>
                                        <p className="text-[15px] ml-[0.3vw]">Accept</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
