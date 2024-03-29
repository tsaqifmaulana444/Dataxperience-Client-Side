"use client"

import Image from "next/image"
import Login from "../images/login.png"
import Logo2 from "../images/logo2.png"
import Google from "../images/google.png"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const isAdmin = (role: number | undefined) => role === 1
  const isRegularUser = (role: number | undefined) => role === 2

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setError("")
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    setError("")
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  
    try {
      const response = await fetch('/api/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
  
      if (response.ok) {
        const data = await response.json()
  
        if (data.role !== undefined) {
          // Store user data in session storage
          sessionStorage.setItem('userData', JSON.stringify(data))
  
          if (isAdmin(data.role)) {
            router.push('/admin')
          } else if (isRegularUser(data.role)) {
            router.push('/')
          } else {
            console.error('Unknown role:', data.role)
          }
        } else {
          console.error('Role is undefined in the response:', data)
        }
      } else {
        const data = await response.json()
        setError(data.message)
      }
    } catch (error) {
      console.error('Sign-in error:', error)
      setError('Internal Server Error')
    }
  }

  return (
    <div className="w-full flex text-[#141414]">
      <div className="content sm:w-[50vw] w-full">
        <div className="h-screen flex flex-col items-center justify-center">
          <div className="w-[80%] sm:w-[60%] mx-auto mt-20 sm:mt-0">
            <Image src={Logo2} alt="Logo2" className="w-[50px]" />
            <h1 className="font-bold sm:text-[25px] text-[21px] mt-2">Welcome Back!</h1>
            <p className="sm:text-[17px] text-[14px] mt-2">
              Enter to get unlimited access to the latest data news.
            </p>
          </div>
          <div className="w-[80%] sm:w-[60%] mx-auto mt-[20px] pb-10 sm:pb-0">
            <form onSubmit={handleSignIn} method="POST">
              <div>
                <label className="sm:text-[17px] text-[13px] font-bold">
                  Email <span className="text-[#D12626]">*</span>
                </label>
                <br />
                <input
                  autoComplete="off"
                  type="email"
                  placeholder="Enter your email address"
                  className="border border-[#A1A1A1] px-5 sm:py-2.5 py-1.5 rounded-md w-full sm:text-[13px] text-[11px] mt-2"
                  value={email}
                  name="email"
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mt-3">
                <label className="sm:text-[17px] text-[13px] font-bold">
                  Password <span className="text-[#D12626]">*</span>
                </label>
                <br />
                <input
                  autoComplete="off"
                  type="password"
                  placeholder="Enter your password"
                  className="border border-[#A1A1A1] px-5 sm:py-2.5 py-1.5 rounded-md w-full sm:text-[13px] text-[11px] mt-2"
                  value={password}
                  name="password"
                  onChange={handlePasswordChange}
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full bg-[#D12626] px-2.5 sm:py-2.5 py-2 rounded-md text-white font-bold sm:text-[16px] text-[13px] mt-5"
              >
                Sign In
              </button>
            </form>
            <div>
              <p className="w-fit mx-auto mt-3 sm:text-[14px] text-[12px]">
                Don&apos;t Have an Account?{" "}
                <a href="/sign-up" className="text-[#D12626]">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="image w-[50vw] h-[100vh] bg-red-200 hidden sm:block">
        <Image
          src={Login}
          alt="Login"
          className="h-full object-cover"
        />
      </div>
    </div>
  )
}
