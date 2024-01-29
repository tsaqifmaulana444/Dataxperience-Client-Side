"use client"
import Link from 'next/link'
import Logo from "../../images/logo.png"
import Image from "next/image"
import Profile from "../../images/blank_profile.jpeg"
import Hamburger from "../../images/hamburger.png"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { Dropdown } from 'flowbite-react'
import { useState } from 'react';


export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    return (
        <div className="flex justify-between text-[#141414] sm:w-[83%] w-[90%] mx-auto">
            <div className="sm:w-[230px] w-[180px] my-auto cursor-pointer mt-[10px]">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Logo"
                        className="w-full"
                        priority
                    />
                </Link>
            </div>
            <div className="sm:flex hidden text-[#141414] w-[52%] justify-between text-sm text-center font-medium mt-[25px]">
                <div className="flex flex-col justify-center items-center">
                    <Link href="/categories" className='align-middle'>All Categories</Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Link href="/categories#data_analytics" className='align-middle'>Data Analytics</Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Link href="/categories#data_science" className='align-middle'>Data Science</Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Link href="/categories#ai" className='align-middle'>AI</Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Link href="/categories#machine_learning" className='align-middle'>ML</Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Link href="/categories#cloud_computing" className='align-middle'>Cloud Computing</Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Dropdown label="More" inline>
                        <Dropdown.Item>
                            <Link href="/contact-us">Contact Us</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link href="/#">Privacy Policy</Link>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </div>

            <div className="sm:flex hidden ml-[55px] mt-5">
                <div className="w-fit my-auto">
                    <Image
                        src={Profile}
                        alt="User"
                        width={35}
                        height={35}
                        className="rounded-full my-auto"
                    />
                </div>
                <div className="my-auto w-fit ml-[20px]">
                    <p className="font-bold text-base">Not Signed In</p>
                    <Link href="/sign-in" className="underline -mt-1 text-sm cursor-pointer font-medium">
                        Sign In
                    </Link>
                </div>
            </div>
            <div className="sm:hidden block mt-[25px]" onClick={toggleSidebar}>
                <Image
                    src={Hamburger}
                    alt="hamburger"
                    width={20}
                    height={20}
                    className=""
                />
            </div>
            {isSidebarOpen && (
                <div className={`sm:hidden fixed top-0 left-0 w-[100%] h-full bg-[#0000007d] z-50 transition-transform ease-in-out transform ${isSidebarOpen ? '' : 'translate-x-full'}`}>
                    {/* Sidebar content */}
                    <div className="p-4 bg-white w-[70%] h-full">
                        <button onClick={closeSidebar} className="font-bold text-base underline cursor-pointer">
                            Back
                        </button>
                        <p className="font-bold text-base">Not Signed In</p>
                        <Link href="/sign-in" className="underline -mt-1 text-sm cursor-pointer font-medium">
                            Sign In
                        </Link>
                        {/* Add other sidebar links as needed */}
                    </div>
                </div>
            )}
        </div>
    )
}
