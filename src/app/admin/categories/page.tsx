"use client"

import AdminSideBar from '@/app/components/backend/AdminSideBar'
import '../../../../public/styles/style.css'
import AdminNavbar from '@/app/components/backend/AdminNavbar'
import { useEffect, useState } from 'react'
import { Button, Modal } from 'flowbite-react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import toast, { Toaster } from 'react-hot-toast'

interface Category {
    id?: number
    name: string
}

export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([])
    const [error, setError] = useState('')
    const [newCategory, setNewCategory] = useState('')
    const [openModalDelete, setOpenModalDelete] = useState(false)

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
                toast.success('Data Successfully Created!')
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
                setOpenModalDelete(false)
                toast.success('Data Successfully Deleted!')
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
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
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
                            className='rounded-l-md text-[13px] h-[41px]'
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                        />
                        <button type='submit' className="bg-[#262524] text-white px-4 rounded-r-md w-[7vw] text-[13px] font-medium h-[40px]">Add</button>
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
                                            onClick={() => setOpenModalDelete(true)}
                                            // onClick={() => handleDelete(category.id)}
                                            className="text-red-500 font-bold"
                                        >
                                            Delete
                                        </button>
                                        <Modal show={openModalDelete} size="md" onClose={() => setOpenModalDelete(false)} popup>
                                            <Modal.Header />
                                            <Modal.Body>
                                                <div className="text-center">
                                                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                                        Are you sure you want to delete this data?
                                                    </h3>
                                                    <div className="flex justify-center gap-4">
                                                        <Button color="failure" onClick={() => { setOpenModalDelete(false); handleDelete(category.id) }}>
                                                            {"Yes, I'm sure"}
                                                        </Button>

                                                        <Button color="gray" onClick={() => setOpenModalDelete(false)}>
                                                            No, cancel
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Modal.Body>
                                        </Modal>
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
