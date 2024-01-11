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
            <form onSubmit={handleSubmit} method="POST">
              <div>
                <label className="text-[17px] font-bold">Name <span className="text-[#D12626]">*</span></label>
                <br />
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Enter your name"
                  className="border border-[#A1A1A1] px-3 py-2.5 rounded-md w-full text-[13px] mt-2 h-[38px]"
                  name="name"

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
                  name="email"

                />
              </div>
              <div className="mt-3">
                <label className="text-[17px] font-bold">Country <span className="text-[#D12626]">*</span></label>
                <br />
                <select name="country" id="" className="border border-[#A1A1A1] px-3 py-2.5 rounded-md w-full text-[13px] mt-2 h-[38px]">
                  <option value="">Select Your Country</option>
                  <option value="China">China</option>
                  <option value="India">India</option>
                  <option value="Pakistan">Pakistan</option>
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
                  name="password"

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
                  name="confirm_password"

                />
              </div>
              <div className="flex my-5 justify-between">
                <div className="flex">
                  <input type="checkbox" name="" id="" className="w-[20px] rounded-lg" />
                  <p className="text-[12px] ml-3">Agree to <a href="" className="font-bold">Privacy & Policy</a></p>
                </div>
              </div>
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
