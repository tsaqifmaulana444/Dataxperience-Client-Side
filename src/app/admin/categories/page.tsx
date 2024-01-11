"use client"

import AdminSideBar from '@/app/components/backend/AdminSideBar'
import '../../../../public/styles/style.css'
import AdminNavbar from '@/app/components/backend/AdminNavbar'
import router from "next/navigation"

interface CategoriesFormData {
    name: string
}

export default function Categories() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const data: CategoriesFormData = {
            name: formData.get("name") as string,
        }

        try {
            const response = await fetch("/api/categories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
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

    return (
        <div className='flex w-full '>
            <AdminSideBar />
            <main className="ml-[19vw] w-full h-full">
                <AdminNavbar />
                <div className="flex w-[75vw] mt-[7vh] justify-between mx-[3vw]">
                    <h1 className="font-bold text-[24px]">Categories</h1>
                    <form onSubmit={handleSubmit} method="POST">
                        <input
                            type="text"
                            name="name"
                            id=""
                            placeholder='Enter New Category Name'
                            className='p-2 rounded-l-md text-[13px] h-full'
                        />
                        <button type='submit' className="bg-[#57504D] text-white py-2 px-4 rounded-r-md w-[7vw] text-[13px] font-medium">Add</button>
                    </form>
                </div>

                <div className="relative overflow-x-auto mx-[3vw] mt-[4vh]">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4 text-gray-900">1</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Name</td>
                                <td className="px-6 py-4">20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}
