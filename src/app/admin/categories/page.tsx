"use client"

import AdminSideBar from '@/app/components/backend/AdminSideBar'
import '../../../../public/styles/style.css'
import AdminNavbar from '@/app/components/backend/AdminNavbar'
import router from "next/navigation"
import { useEffect, useState } from 'react'

interface Category {
    id?: number
    name: string
}

export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([])
    const [error, setError] = useState('')
    const [newCategory, setNewCategory] = useState('');

    // create
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const data: Category = {
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
                await fetchCategories()
                setNewCategory('')
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

    // read
    const fetchCategories = async () => {
        try {
            const response = await fetch('/api/categories', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (response.ok) {
                const { categories } = await response.json()
                setCategories(categories)
            } else {
                const error = await response.json()
                setError(error.message)
            }
        } catch (error) {
            console.error('Error fetching categories:', error)
            setError('Internal Server Error')
        }
    }


    // delete
    const handleDelete = async (id?: number) => {
        try {
            const response = await fetch(`/api/categories/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if (response.ok) {
                await fetchCategories()
                console.log("Category deleted successfully")
            } else {
                const error = await response.json()
                console.error("Failed to delete category:", error.message)
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

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
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
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
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category, index) => (
                                <tr key={category.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-6 py-4 text-gray-900">{index + 1}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{category.name}</td>
                                    <td className="px-6 py-4">{category.id}</td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleDelete(category.id)}
                                            className="text-red-500 font-bold"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}
