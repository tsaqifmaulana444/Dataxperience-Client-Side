"use client"

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
import { useRouter } from "next/navigation"
import { Dropdown } from 'flowbite-react'
import { useState } from "react"
import { Button, Modal } from 'flowbite-react'

interface Agenda {
    id?: number
    title: string
    description: string
    type: string
}

export default function AdminPage() {
    const [openModalAgenda, setOpenModalAgenda] = useState(false)
    const [agenda, setAgenda] = useState<Agenda[]>([])
    const [newAgenda, setNewAgenda] = useState('')
    const [error, setError] = useState('')

    // create
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const data: Agenda = {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            type: formData.get("type") as string,
        }

        try {
            const response = await fetch("/api/agenda", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                await fetchAgenda()
                setNewAgenda('')
                setOpenModalAgenda(false)
                const result = await response.json()
                console.log(result)
            } else {
                const error = await response.json()
                console.error("Failed:", error.message)
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

    // read
    const fetchAgenda = async () => {
        try {
            const response = await fetch('/api/account', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            console.log(response)
            if (response.ok) {
                const { agenda } = await response.json()
                setAgenda(agenda)
            } else {
                const error = await response.json()
                setError(error.message)
            }
        } catch (error) {
            console.error('Error fetching agenda:', error)
            setError('Internal Server Error')
        }
    }

    // delete
    const handleDelete = async (id?: number) => {
        try {
            const response = await fetch(`/api/agenda/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if (response.ok) {
                await fetchAgenda()
                console.log("Agenda deleted successfully")
            } else {
                const error = await response.json()
                console.error("Failed to delete agenda:", error.message)
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

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
                            <h1>Upcoming Agendas</h1>
                            <button onClick={() => setOpenModalAgenda(true)}>
                                <p className="ml-[19vw]">Add <FontAwesomeIcon icon={faPlus} style={{ color: "#141414" }} /></p>
                            </button>
                            <Modal show={openModalAgenda} onClose={() => setOpenModalAgenda(false)}>
                                <Modal.Header>Add Agenda</Modal.Header>
                                <Modal.Body>
                                    <div className="space-y-6">
                                        <form className="mx-auto" onSubmit={handleSubmit} method="POST">
                                            <div className="mb-3">
                                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                                <input autoComplete="off" type="text" id="title" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                                <textarea autoComplete="off" id="description" name="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-[150px]" required></textarea>
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                                                <select id="type" name="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                    <option selected>Choose Type</option>
                                                    <option value="Urgent">Urgent</option>
                                                    <option value="Semi Urgent">Semi Urgent</option>
                                                    <option value="Medium Intensity">Medium Intensity</option>
                                                    <option value="Low Intensity">Low Intensity</option>
                                                    <option value="Very Low Intensity">Very Low Intensity</option>
                                                </select>
                                            </div>
                                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                                        </form>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>
                        <div className="mt-[2vh]">
                            <div className="flex w-[33vw] mx-[2vw]">
                                <div>
                                    <p className="font-semibold w-fit mx-auto text-[24px]">05</p>
                                    <p className="font-medium -mt-[0.8vh] text-[13px]">May</p>
                                </div>
                                <div className="ml-[1.3vw] mt-[1vh]">
                                    <p className="opacity-70 text-[13px] font-semibold">Full Day</p>
                                    <p className="font-semibold -ml-[0.1vw] text-[15px]">Business Expansion In Cambodia</p>
                                </div>
                                <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span><FontAwesomeIcon icon={faEllipsisVertical} style={{ color: "#2e333e" }} className="ml-[12vw] mt-[20px] my-auto" size="lg" /></span>}>
                                    <Dropdown.Item>Details</Dropdown.Item>
                                    {/* <Dropdown.Item onClick={() => handleDelete(author.id)}>Delete</Dropdown.Item> */}
                                </Dropdown>
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
                                    <p className="opacity-70 text-[13px] font-semibold">Freecodecamp</p>
                                    <p className="font-semibold text-[15px]">3 Months Contract Offer</p>
                                </div>
                                <div className="flex ml-[2.5vw]">
                                    <div className="flex text-red-600 my-auto cursor-pointer">
                                        <FontAwesomeIcon icon={faXmark} size="xl" />
                                        <p className="text-[14px] ml-[0.3vw]">Decline</p>
                                    </div>
                                    <div className="flex text-green-500 my-auto ml-[1vw] cursor-pointer">
                                        <FontAwesomeIcon icon={faCheck} size="xl" />
                                        <p className="text-[14px] ml-[0.3vw]">Accept</p>
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
                                    <p className="opacity-70 text-[13px] font-semibold">Freecodecamp</p>
                                    <p className="font-semibold text-[15px]">3 Months Contract Offer</p>
                                </div>
                                <div className="flex ml-[2.5vw]">
                                    <div className="flex text-red-600 my-auto cursor-pointer">
                                        <FontAwesomeIcon icon={faXmark} size="xl" />
                                        <p className="text-[14px] ml-[0.3vw]">Decline</p>
                                    </div>
                                    <div className="flex text-green-500 my-auto ml-[1vw] cursor-pointer">
                                        <FontAwesomeIcon icon={faCheck} size="xl" />
                                        <p className="text-[14px] ml-[0.3vw]">Accept</p>
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
                                    <p className="opacity-70 text-[13px] font-semibold">Freecodecamp</p>
                                    <p className="font-semibold text-[15px]">3 Months Contract Offer</p>
                                </div>
                                <div className="flex ml-[2.5vw]">
                                    <div className="flex text-red-600 my-auto cursor-pointer">
                                        <FontAwesomeIcon icon={faXmark} size="xl" />
                                        <p className="text-[14px] ml-[0.3vw]">Decline</p>
                                    </div>
                                    <div className="flex text-green-500 my-auto ml-[1vw] cursor-pointer">
                                        <FontAwesomeIcon icon={faCheck} size="xl" />
                                        <p className="text-[14px] ml-[0.3vw]">Accept</p>
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
