"use client"

import AdminNavbar from "../../components/backend/AdminNavbar"
import AdminSideBar from "../../components/backend/AdminSideBar"
import '../../../../public/styles/style.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Image from "next/image"
import Profile from "../../images/blank_profile.jpeg"
import "react-circular-progressbar/dist/styles.css"
import toast, { Toaster } from 'react-hot-toast'
import { useEffect, useState } from "react"
import { Button, Modal } from 'flowbite-react'

interface Profile {
    id: number
    name?: string
    email?: string
    profile?: string
    password?: string
}

export default function AdminProfile() {
    const [profile, setProfile] = useState<Profile | null>(null)
    const [error, setError] = useState('')
    const [openModalUpdate, setOpenModalUpdate] = useState(false)
    const fetchProfile = async () => {
        try {
            const response = await fetch('/api/admin_profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            console.log(response)
            if (response.ok) {
                const { authors } = await response.json()
                setProfile(authors)
            } else {
                const error = await response.json()
                setError(error.message)
            }
        } catch (error) {
            console.error('Error fetching news:', error)
            setError('Internal Server Error')
        }
    }
    const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const data: Profile = {
            id: parseInt(formData.get("id") as string),
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            profile: formData.get("profile") as string,
            password: formData.get("password") as string,
        }

        try {
            const response = await fetch(`/api/admin_profile/${data.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                await fetchProfile()
                setOpenModalUpdate(false)
                toast.success('Data Successfully Updated!')
            } else {
                const error = await response.json()
                console.error("Failed to update author:", error.message)
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

    const handlePhoto = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const data: Profile = {
            id: parseInt(formData.get("id") as string),
            profile: formData.get("profile") as string,
        }

        try {
            const response = await fetch(`/api/admin_photo/${data.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                await fetchProfile()
                setOpenModalUpdate(false)
                toast.success('Data Successfully Updated!')
            } else {
                const error = await response.json()
                console.error("Failed to update author:", error.message)
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }
    useEffect(() => {
        fetchProfile()
    }, [])
    return (
        <div className='flex w-full '>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
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
                                <button type="button" className="text-white bg-[#343434] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-5" onClick={() => setOpenModalUpdate(true)}>
                                    Change Profile Photo
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-[55%] w-[100%] sm:mt-0 mt-5">
                        <form onSubmit={handleUpdate} method="PATCH">
                            <input type="hidden" name="id" defaultValue={profile?.id} />
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter your name" required autoComplete="off" defaultValue={profile?.name} />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter your email" required autoComplete="off" defaultValue={profile?.email} />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Change password</label>
                                <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required placeholder="Enter your password" autoComplete="off" defaultValue={profile?.password} />
                            </div>
                            <div className="w-full flex justify-end">
                                <button type="submit" className="text-white bg-[#C22020] hover:bg-[#a01b1b] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Update Profile</button>
                            </div>
                        </form>
                        <Modal show={openModalUpdate} onClose={() => setOpenModalUpdate(false)}>
                            <Modal.Header>Edit Profile Photo</Modal.Header>
                            <Modal.Body>
                                <form onSubmit={handlePhoto}>
                                    <input type="hidden" name="id" defaultValue={profile?.id} />
                                    <div className="space-y-6">
                                        <div className="mb-5">
                                            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Photo</label>
                                            <input autoComplete="off" type="text" id="image" name="profile" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required defaultValue={profile?.profile} />
                                        </div>
                                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                                    </div>
                                </form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </section>
            </main>
        </div>
    )
}
