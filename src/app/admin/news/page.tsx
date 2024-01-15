"use client"

import AdminSideBar from '@/app/components/backend/AdminSideBar'
import '../../../../public/styles/style.css'
import AdminNavbar from '@/app/components/backend/AdminNavbar'
import { useEffect, useState } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal } from 'flowbite-react'

interface News {
    id?: number
    title: string
    news_body: string
    news_image: string
    category_ids?: number[] | null
    author_id?: number
    created_at?: string
    updated_at?: string
    deleted_at?: string | null
    // Define foreign key relationships
}

interface Category {
    id: number
    name: string
}

export default function NewsPage() {
    const [news, setNews] = useState<News[]>([])
    const [newNews, setNewNews] = useState('')
    const [error, setError] = useState('')
    const [openModalCreate, setOpenModalCreate] = useState(false)
    const [openModalUpdate, setOpenModalUpdate] = useState(false)
    const [editingNews, setEditingNews] = useState<News | null>(null)
    const [categories, setCategories] = useState<Category[]>([])

    // create
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const data: News = {
            title: formData.get("title") as string,
            news_body: formData.get("news_body") as string,
            news_image: formData.get("news_image") as string,
            author_id: 1,
            category_ids: Array.from(formData.getAll("category_ids[]") as FormDataEntryValue[]).map(Number),
        }

        try {
            const response = await fetch("/api/news", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                await fetchNews()
                setNewNews('')
                setOpenModalCreate(false)
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
    const fetchNews = async () => {
        try {
            const response = await fetch('/api/news', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            console.log(response)
            if (response.ok) {
                const { news } = await response.json()
                setNews(news)
            } else {
                const error = await response.json()
                setError(error.message)
            }
        } catch (error) {
            console.error('Error fetching news:', error)
            setError('Internal Server Error')
        }
    }

    // update
    const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const data: News = {
            id: parseInt(formData.get("id") as string),
            title: formData.get("title") as string,
            news_body: formData.get("news_body") as string,
            news_image: formData.get("news_image") as string,
            category_ids: Array.from(formData.getAll("category_ids") as FormDataEntryValue[]).map(Number),
        }

        try {
            const response = await fetch(`/api/news/${data.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                await fetchNews()
                setOpenModalUpdate(false)
                console.log("News updated successfully")
            } else {
                const error = await response.json()
                console.error("Failed to update news:", error.message)
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }


    // delete
    const handleDelete = async (id?: number) => {
        try {
            const response = await fetch(`/api/news/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if (response.ok) {
                await fetchNews()
                console.log("News deleted successfully")
            } else {
                const error = await response.json()
                console.error("Failed to delete news:", error.message)
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

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

    useEffect(() => {
        fetchNews()
        fetchCategories()
    }, [])

    return (
        <div className='flex w-full '>
            <AdminSideBar />
            <main className="ml-[19vw] w-full h-full">
                <AdminNavbar />
                <div className="flex w-[75vw] mt-[7vh] justify-between mx-[3vw]">
                    <h1 className="font-bold text-[24px]">News Panel</h1>
                    <button className="bg-[#262524] text-white p-2 rounded-md text-[13px] font-medium" onClick={() => setOpenModalCreate(true)}><FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} /> Add News</button>
                </div>
                <Modal show={openModalCreate} onClose={() => setOpenModalCreate(false)}>
                    <Modal.Header>Create A News</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <form className="mx-auto" onSubmit={handleSubmit} method="POST">
                                <div className="mb-3">
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">News Title</label>
                                    <input autoComplete="off" type="text" id="title" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="news_image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thumbnail Image</label>
                                    <input autoComplete="off" type="text" id="news_image" name="news_image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required placeholder='Please Use URL Image' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categories</label>
                                    {/* loop categories data here */}
                                    <div className="">
                                        {categories.map((category, index) => (
                                            <div key={category.id} className="flex items-center mb-4">
                                                <input id={`category-checkbox-${index}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " defaultValue={category.id} name="category_ids" />
                                                <label htmlFor={`category-checkbox-${index}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{category.name}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="news_body" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
                                    <textarea autoComplete="off" name="news_body" id="news_body" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-[150px]" required></textarea>
                                </div>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>

                <div className="relative overflow-x-auto mx-[3vw] mt-[3vh]">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Content
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {news.map((data, index) => (
                                <tr key={data.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{data.title}</td>
                                    <td className="px-6 py-4">{data.news_body}</td>
                                    <td className="px-6 py-4">{data.news_image}</td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleDelete(data.id)}
                                            className="text-red-500 font-bold"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => {
                                                setEditingNews(data)
                                                setOpenModalUpdate(true)
                                            }}
                                            className="text-yellow-500 font-bold ml-3"
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Modal show={openModalUpdate} onClose={() => setOpenModalUpdate(false)}>
                        <Modal.Header>Edit News</Modal.Header>
                        <Modal.Body>
                            <div className="space-y-6">
                                <form className="mx-auto" onSubmit={handleUpdate} method="PATCH">
                                    <input type="hidden" name="id" value={editingNews?.id} />
                                    <div className="mb-3">
                                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            News Title
                                        </label>
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            id="title"
                                            name="title"
                                            defaultValue={editingNews?.title}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="news_image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Thumbnail Image
                                        </label>
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            id="news_image"
                                            name="news_image"
                                            defaultValue={editingNews?.news_image}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                            required
                                            placeholder="Please Use URL Image"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categories</label>
                                        {/* loop categories data here */}
                                        <div className="">
                                            {categories.map((category, index) => (
                                                <div key={category.id} className="flex items-center mb-4">
                                                    <input id={`category-checkbox-${index}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " defaultValue={category.id} name="category_ids" />
                                                    <label htmlFor={`category-checkbox-${index}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{category.name}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <label htmlFor="news_body" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Content
                                        </label>
                                        <textarea
                                            autoComplete="off"
                                            name="news_body"
                                            id="news_body"
                                            defaultValue={editingNews?.news_body}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-[150px]"
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>

            </main>
        </div>
    )
}
