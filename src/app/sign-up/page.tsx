"use client"

import Image from "next/image"
import Login from "../images/login.png"
import Logo2 from "../images/logo2.png"
import Google from "../images/google.png"
import { useState } from "react"
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Email and password are required")
      return
    }

    const loginData = {
      Email: email,
      Password: password,
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      })

      if (!response.ok) {
        const data = await response.json()
        setError(data.error)
        return
      }

      const data = await response.json()
      setError("") // Clear any previous error
      console.log("Token:", data.token)
      // Perform any additional actions after successful login
      router.push('/admin')
    } catch (error) {
      console.error("Login error:", error)
      setError("An unexpected error occurred.")
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setError("")
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    setError("")
  }

  return (
    <div className="w-full flex text-[#141414]">
      <div className="content w-[50vw]">
      <div className="h-screen flex flex-col items-center justify-center">
          <div className="w-[64%] mx-auto">
            <Image
              src={Logo2}
              alt="Logo2"
              className="w-[50px]"
            />
            <h1 className="font-bold text-[25px]">Welcome!</h1>
            <p className="text-[17px] ">Register your account to get update about data news.</p>
          </div>
          <div className="w-[64%] mx-auto mt-[20px]">
            <form onSubmit={handleLogin}>
              <div>
                <label className="text-[17px] font-bold">Name <span className="text-[#D12626]">*</span></label>
                <br />
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Enter your name"
                  className="border border-[#A1A1A1] px-3 py-2.5 rounded-md w-full text-[13px] mt-2 h-[38px]"
                  value={email}
                  name="name"
                  onChange={handleEmailChange}

                />
              </div>
              <div className="mt-3">
                <label className="text-[17px] font-bold">Email <span className="text-[#D12626]">*</span></label>
                <br />
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Enter your email address"
                  className="border border-[#A1A1A1] px-3 py-2.5 rounded-md w-full text-[13px] mt-2 h-[38px]"
                  value={email}
                  name="email"
                  onChange={handleEmailChange}

                />
              </div>
              <div className="mt-3">
                <label className="text-[17px] font-bold">Country <span className="text-[#D12626]">*</span></label>
                <br />
                <select name="country" id="" className="border border-[#A1A1A1] px-3 py-2.5 rounded-md w-full text-[13px] mt-2 h-[38px]">
                  <option value="">Select Your Country</option>
                  <option value="">China</option>
                  <option value="">India</option>
                  <option value="">Pakistan</option>
                </select>
              </div>
              <div className="mt-3">
                <label className="text-[17px] font-bold">Password <span className="text-[#D12626]">*</span></label>
                <br />
                <input
                  autoComplete="off"
                  type="password"
                  placeholder="Enter your password"
                  className="border border-[#A1A1A1] px-3 py-2.5 rounded-md w-full text-[13px] mt-2 h-[38px]"
                  value={email}
                  name="password"
                  onChange={handleEmailChange}

                />
              </div>
              <div className="mt-3">
                <label className="text-[17px] font-bold">Confirm Password <span className="text-[#D12626]">*</span></label>
                <br />
                <input
                  autoComplete="off"
                  type="password"
                  placeholder="Confirm your password"
                  className="border border-[#A1A1A1] px-3 py-2.5 rounded-md w-full text-[13px] mt-2 h-[38px]"
                  value={password}
                  name="password"
                  onChange={handlePasswordChange}

                />
              </div>
              <div className="flex my-5 justify-between">
                <div className="flex">
                  <input type="checkbox" name="" id="" className="w-[20px] rounded-lg" />
                  <p className="text-[12px] ml-3">Agree to <a href="" className="font-bold">Privacy & Policy</a></p>
                </div>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button type="submit" className="w-full bg-[#D12626] p-2.5 rounded-md text-white font-bold text-[16px]">
                Sign In
              </button>
            </form>
          </div>
          <div>
              <p className="w-fit mx-auto mt-3 text-[14px]">Already Have Account? <a href="/sign-up" className="text-[#D12626]">Sign In</a></p>
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
