"use client"

import AdminNavbar from "../components/backend/AdminNavbar"
import AdminSideBar from "../components/backend/AdminSideBar"
import '../../../public/styles/style.css'
import Link from "next/link"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from 'react'

interface Feedback {
    id?: number
    name: string
    email: string
    description: string
    type: string
}

export default function AdminPage() {
    const [feedback, setFeedback] = useState<Feedback[]>([])
    const [error, setError] = useState('')

    const fetchFeedbacks = async () => {
        try {
            const response = await fetch('/api/feedback', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (response.ok) {
                const { feedback } = await response.json()
                setFeedback(feedback)
            } else {
                const error = await response.json()
                setError(error.message)
            }
        } catch (error) {
            console.error('Error fetching feedbacks:', error)
            setError('Internal Server Error')
        }
    }
    useEffect(() => {
        fetchFeedbacks()
    }, [])
    return (
        <div className='flex w-full '>
            <AdminSideBar />
            <main className="ml-[19vw] w-full h-full">
                <AdminNavbar />
                <div className="flex w-[75vw] mt-[7vh] justify-between mx-[3vw]">
                    <h1 className="font-bold text-[24px]">Dashboard</h1>
                    <Link href="/admin/news">
                        <button className="bg-[#262524] text-white p-2 rounded-md w-[9vw] text-[16px] font-medium">+ Add News</button>
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
                    <div className="bg-white w-[37vw] h-[40vh] rounded-md mt-[2.2vh]">
                        <div className="flex w-full mx-[2vw] opacity-70 mt-[3vh] text-[16px] font-semibold">
                            <h1>Web Statistic</h1>
                        </div>
                        <div className="w-fit mx-auto mt-16">
                            <a href="/admin/statistic">
                                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-80 font-medium rounded-lg text-sm px-5 py-2.5 me-2">Statistic Page</button>
                            </a>
                        </div>
                        <div className="w-fit mx-auto mt-1">
                            <p className="text-green-700">See Completely In Stats Page</p>
                        </div>
                    </div>
                    <div className="bg-white w-[37vw] h-[40vh] rounded-md mt-[2.2vh] ml-[0.6vw]">
                        <div className="flex w-full mx-[2vw] opacity-70 mt-[3vh] text-[16px] font-semibold">
                            <h1>Sponsorship Request</h1>
                        </div>
                        <div className="mt-[2vh] h-[180px]">
                            {/* loop */}
                            {feedback.map((data, index) => (
                                <div className="flex justify-between mx-[1vw] mt-[2vh]" key={data.id}>
                                    <div className="ml-[1vw]">
                                        <p className="opacity-70 text-[13px] font-semibold">{data.type}</p>
                                        <p className="font-semibold text-[15px]">{`${data.description.substring(0, 70)}...`}</p>
                                    </div>
                                    <div className="flex mr-4">
                                        <div className="flex text-green-500 my-auto ml-[1vw] cursor-pointer">
                                            <FontAwesomeIcon icon={faComment} size="xl" />
                                            <p className="text-[14px] ml-[0.3vw]">Respond</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
