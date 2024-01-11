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
        router.push('/admin')
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
      <div className="content w-[50vw]">
        <div className="h-screen flex flex-col items-center justify-center">
          <div className="w-[60%] mx-auto">
            <Image src={Logo2} alt="Logo2" className="w-[50px]" />
            <h1 className="font-bold text-[25px]">Welcome Back!</h1>
            <p className="text-[17px] mt-2">
              Enter to get unlimited access to the latest data news.
            </p>
          </div>
          <div className="w-[60%] mx-auto mt-[20px]">
            <form onSubmit={handleSignIn} method="POST">
              <div>
                <label className="text-[17px] font-bold">
                  Email <span className="text-[#D12626]">*</span>
                </label>
                <br />
                <input
                  autoComplete="off"
                  type="email"
                  placeholder="Enter your email address"
                  className="border border-[#A1A1A1] px-5 py-2.5 rounded-md w-full text-[13px] mt-2"
                  value={email}
                  name="email"
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mt-3">
                <label className="text-[17px] font-bold">
                  Password <span className="text-[#D12626]">*</span>
                </label>
                <br />
                <input
                  autoComplete="off"
                  type="password"
                  placeholder="Enter your password"
                  className="border border-[#A1A1A1] px-5 py-2.5 rounded-md w-full text-[13px] mt-2"
                  value={password}
                  name="password"
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="flex my-5 justify-between">
                <div className="flex">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-[20px] rounded-lg"
                  />
                  <p className="font-bold text-[15px] ml-3">Remember Me</p>
                </div>
                <p className="font-bold text-[15px] text-[#D12626]">
                  Forgot Your Password?
                </p>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full bg-[#D12626] p-2.5 rounded-md text-white font-bold text-[16px]"
              >
                Sign In
              </button>
            </form>
            <div className="flex justify-between my-5">
              <div className="w-[35%] bg-[#141414] h-[1px] rounded-md opacity-40 my-auto"></div>
              <p className="mx-[10px] text-[14px] opacity-60">
                Or, Sign In With
              </p>
              <div className="w-[35%] bg-[#141414] h-[1px] rounded-md opacity-40 my-auto"></div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#ffffff] p-2.5 rounded-md text-[16px] border border-[#A1A1A1]"
              >
                <div className="flex mx-auto my-auto w-fit">
                  <Image src={Google} alt="Login" className="w-[25px]" />
                  <p className="ml-3 my-auto">Sign In With Google</p>
                </div>
              </button>
              <p className="w-fit mx-auto mt-3 text-[14px]">
                Don&apos;t Have an Account?{" "}
                <a href="/sign-up" className="text-[#D12626]">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="image w-[50vw] h-[100vh] bg-red-200">
        <Image
          src={Login}
          alt="Login"
          className="h-full object-cover"
        />
      </div>
    </div>
  )
}
