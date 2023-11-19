"use client"
import { useState } from 'react'
import AdminSideBar from '@/app/components/backend/AdminSideBar'
import '../../../../public/styles/style.css'
import AdminNavbar from '@/app/components/backend/AdminNavbar'

export default function Page() {
    const [categoryName, setCategoryName] = useState('')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!categoryName.trim()) {
            alert('Please enter a category name')
            return
        }

        try {
            const response = await fetch('http://127.0.0.1:5000/api/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: categoryName }),
            })

            if (response.ok) {
                alert('Category added successfully')
                // Additional logic if needed
            } else {
                alert('Failed to add category')
            }
        } catch (error) {
            console.error('Error adding category:', error)
        }
    }

    return (
        <div className='flex w-full '>
            <AdminSideBar />
            <main className="ml-[19vw] w-full h-full">
                <AdminNavbar />
                <div className="flex w-[75vw] mt-[7vh] justify-between mx-[3vw]">
                    <h1 className="font-bold text-[24px]">Categories</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="category"
                            id=""
                            placeholder='Enter New Category Name'
                            className='p-2 rounded-l-md text-[13px] h-full'
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
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
                                <td className="px-6 py-4 text-gray-900">
                                    1
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Apple MacBook Pro 17
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4 text-gray-900">
                                    1
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <td className="px-6 py-4 text-gray-900">
                                    1
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">
                                    Black
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </main>
        </div>
    )
}
