"use client"

import Navbar from "../components/frontend/Navbar"
import Footer from "../components/frontend/Footer"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Profile from "../images/blank_profile.jpeg"
import { useEffect, useState } from "react"

// export const metadata = {
//   title: 'Contact | Dataxperience'
// }

interface Profile {
    id: number
    name: string
    email: string
    country: string
    password: string
}  

export default function ContactUs() {
    const [profile, setProfile] = useState<Profile[]>([])
    const [error, setError] = useState('')
    const fetchProfile = async () => {
        try {
          const response = await fetch('/api/profile', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          console.log(response)
          if (response.ok) {
            const { users } = await response.json()
            setProfile(users)
          } else {
            const error = await response.json()
            setError(error.message)
          }
        } catch (error) {
          console.error('Error fetching news:', error)
          setError('Internal Server Error')
        }
      }
      useEffect(() => {
        fetchProfile()
      }, [])
    return (
        <div>
            <Navbar />
            <h1 className="mx-auto sm:w-[84%] w-[86%] text-[25px] font-bold my-8 ">Change Profile</h1>
            <section className="flex mx-auto sm:w-[84%] w-[86%] mb-[90px] justify-between mt-[40px] sm:flex-row flex-col">
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
                            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter your password" required autoComplete="off" defaultValue={profile.name}/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter your email" required autoComplete="off" defaultValue={profile.email}/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country </label>
                            <select id="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required>
                                <option value="">China</option>
                            </select>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Change Password</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required autoComplete="off" defaultValue={profile.password}/>
                        </div>
                        <div className="w-full flex justify-end">
                            <button type="submit" className="text-white bg-[#C22020] hover:bg-[#a01b1b] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Update Profile</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}
