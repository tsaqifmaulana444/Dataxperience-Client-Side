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
        <div className="mt-[10vh] mx-[9vw]">
          <Image
            src={Logo2}
            alt="Logo2"
            className="w-[4.5vw]"
          />
          <h1 className="font-bold text-[25px]">Welcome Back!</h1>
          <p className="text-[17px] mt-2">Enter to get unlimited access of the latest data news.</p>
        </div>
        <div className="mx-[9vw] mt-[4vh]">
          <form onSubmit={handleLogin}>
            <div>
              <label className="text-[17px] font-bold">Email <span className="text-[#D12626]">*</span></label>
              <br />
              <input
                type="text"
                placeholder="Enter your email address"
                className="border border-[#A1A1A1] px-5 py-3 rounded-md w-full text-[13px] mt-2"
                value={email}
                name="email"
                onChange={handleEmailChange}

              />
            </div>
            <div className="mt-3">
              <label className="text-[17px] font-bold">Password <span className="text-[#D12626]">*</span></label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="border border-[#A1A1A1] px-5 py-3 rounded-md w-full text-[13px] mt-2"
                value={password}
                name="password"
                onChange={handlePasswordChange}

              />
            </div>
            <div className="flex my-5 justify-between">
              <div className="flex">
                <input type="checkbox" name="" id="" className="w-[1.5vw] rounded-lg" />
                <p className="font-bold text-[15px] ml-3">Remember Me</p>
              </div>
              <p className="font-bold text-[15px] text-[#D12626]">Forgot Your Password?</p>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="w-full bg-[#D12626] p-2.5 rounded-md text-white font-bold text-[16px]">
              Sign In
            </button>
          </form>
          <div className="flex justify-between my-5">
            <div className="w-[11vw] bg-[#141414] h-[0.1vh] rounded-md opacity-40 my-auto"></div>
            <p className="mx-[1vw] text-[14px] opacity-60">Or, Sign In With</p>
            <div className="w-[11vw] bg-[#141414] h-[0.1vh] rounded-md opacity-40 my-auto"></div>
          </div>
          <div>
            <button type="submit" className="w-full bg-[#ffffff] p-2.5 rounded-md text-[16px] border border-[#A1A1A1]">
              <div className="flex mx-auto my-auto w-fit">
                <Image
                  src={Google}
                  alt="Login"
                  className="w-[2vw]"
                />
                <p className="ml-3 my-auto">Sign In With Google</p>
              </div>
            </button>
            <p className="w-fit mx-auto mt-3 text-[14px]">Don&apost Have Account? <span className="text-[#D12626]">Sign Up</span></p>
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
