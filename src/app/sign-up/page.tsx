"use client"

import Image from "next/image"
import Login from "../images/login.png"
import Logo2 from "../images/logo2.png"
import { useRouter } from "next/navigation"

interface SignUpFormData {
  name: string
  email: string
  country: string
  password: string
  confirm_password: string
}

export default function SignUpPage() {
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data: SignUpFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      country: formData.get("country") as string,
      password: formData.get("password") as string,
      confirm_password: formData.get('confirm_password') as string
    }

    try {
      const response = await fetch("/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const result = await response.json()
        console.log(result)
        router.push("/sign-in")
      } else {
        const error = await response.json()
        console.error("Signup failed:", error.message)
      }
    } catch (error) {
      console.error("Signup error:", error)
    }
  }

  return (
    <div className="w-full flex text-[#141414]">
      <div className="content sm:w-[50vw] w-full">
        <div className="h-screen flex flex-col items-center justify-center sm:pt-0 pt-60">
          <div className="sm:w-[64%] w-[80%] mx-auto">
            <Image
              src={Logo2}
              alt="Logo2"
              className="w-[50px]"
            />
            <h1 className="font-bold sm:text-[25px] text-[22px] mt-2">Welcome!</h1>
            <p className="sm:text-[17px] text-[14px]">Register your account to get update about data news.</p>
          </div>
          <div className="sm:w-[64%] w-[80%] mx-auto mt-[20px] sm:pb-0 pb-10">
            <form onSubmit={handleSubmit} method="POST">
              <div>
                <label className="sm:text-[17px] text-[11px] font-bold">Name <span className="text-[#D12626]">*</span></label>
                <br />
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Enter your name"
                  className="border border-[#A1A1A1] px-3 py-2.5 rounded-md w-full sm:text-[13px] text-[11px] mt-1 h-[38px]"
                  name="name"

                />
              </div>
              <div className="mt-1">
                <label className="sm:text-[17px] text-[11px] font-bold">Email <span className="text-[#D12626]">*</span></label>
                <br />
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Enter your email address"
                  className="border border-[#A1A1A1] px-3 py-2.5 rounded-md w-full sm:text-[13px] text-[11px] mt-1 h-[38px]"
                  name="email"

                />
              </div>
              <div className="mt-1">
                <label className="sm:text-[17px] text-[11px] font-bold">Country <span className="text-[#D12626]">*</span></label>
                <br />
                <select name="country" id="" className="border border-[#A1A1A1] px-3 rounded-md w-full sm:text-[13px] text-[11px] mt-1 h-[38px]">
                  <option value="">Select Your Country</option>
                  <option value="China">China</option>
                  <option value="India">India</option>
                  <option value="Pakistan">Pakistan</option>
                </select>
              </div>
              <div className="mt-1">
                <label className="sm:text-[17px] text-[11px] font-bold">Password <span className="text-[#D12626]">*</span></label>
                <br />
                <input
                  autoComplete="off"
                  type="password"
                  placeholder="Enter your password"
                  className="border border-[#A1A1A1] px-3 py-2.5 rounded-md w-full sm:text-[13px] text-[11px] mt-1 h-[38px]"
                  name="password"

                />
              </div>
              <div className="mt-1">
                <label className="sm:text-[17px] text-[11px] font-bold">Confirm Password <span className="text-[#D12626]">*</span></label>
                <br />
                <input
                  autoComplete="off"
                  type="password"
                  placeholder="Confirm your password"
                  className="border border-[#A1A1A1] px-3 py-2.5 rounded-md w-full sm:text-[13px] text-[11px] mt-1 h-[38px]"
                  name="confirm_password"

                />
              </div>
              <div className="flex my-3 justify-between">
                <div className="flex">
                  <input type="checkbox" name="" id="" className="sm:rounded-sm rounded-sm mt-[3px]" />
                  <p className="sm:text-[14px] text-[11px] ml-3">Agree to <a href="" className="font-bold">Privacy & Policy</a></p>
                </div>
              </div>
              <button type="submit" className="w-full bg-[#D12626] p-2.5 rounded-md text-white font-bold sm:text-[16px] text-[13px]">
                Sign Up
              </button>
            </form>
            <div>
              <p className="w-fit mx-auto mt-3 sm:text-[14px] text-[11px]">Already Have Account? <a href="/sign-in" className="text-[#D12626]">Sign In</a></p>
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
