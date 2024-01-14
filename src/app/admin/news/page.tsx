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
    category_id?: number | null // Marking category_id as optional
    author_id?: number
    created_at?: string // Assuming the DateTime will be converted to a string
    updated_at?: string // Assuming the DateTime will be converted to a string
    deleted_at?: string | null // Marking deleted_at as optional
    // Define foreign key relationships
}

interface FormNews {
    title: string
    news_body: string
    news_image: string
    category_id?: number | null // Marking category_id as optional
    author_id?: number
}


export default function NewsPage() {
    const [news, setNews] = useState<News[]>([])
    const [newNews, setNewNews] = useState('')
    const [error, setError] = useState('')
    const [openModalCreate, setOpenModalCreate] = useState(false)
    const [openModalUpdate, setOpenModalUpdate] = useState(false)
    const [editingNews, setEditingNews] = useState<News | null>(null)

    // create
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const data: FormNews = {
            title: formData.get("title") as string,
            news_body: formData.get("news_body") as string,
            news_image: formData.get("news_image") as string,
        }

        try {
            const response = await fetch("/api/account", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                await fetchNews()
                setNewNews('')
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

    // update, put the frontend function here
    const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
      
        const formData = new FormData(event.currentTarget)
        const data: News = {
          id: parseInt(formData.get("id") as string),
          title: formData.get("title") as string,
          news_body: formData.get("news_body") as string,
          news_image: formData.get("news_image") as string,
        }
      
        try {
          const response = await fetch(`/api/account/${data.id}`, {
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

    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <div className='flex w-full '>
            <AdminSideBar />
            <main className="ml-[19vw] w-full h-full">
                <AdminNavbar />
                <div className="flex w-[75vw] mt-[7vh] justify-between mx-[3vw]">
                    <h1 className="font-bold text-[24px]">News Panel</h1>
                    <button className="bg-[#57504D] text-white p-2 rounded-md text-[13px] font-medium" onClick={() => setOpenModalCreate(true)}><FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} /> Add News</button>
                </div>
                <Modal show={openModalCreate} onClose={() => setOpenModalCreate(false)}>
                    <Modal.Header>Create A News</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <form className="mx-auto" onSubmit={handleSubmit} method="POST">
                                <div className="mb-3">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">News Name</label>
                                    <input autoComplete="off" type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input autoComplete="off" type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default Password</label>
                                    <input autoComplete="off" type="text" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
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
                    {/* <Modal show={openModalUpdate} onClose={() => setOpenModalUpdate(false)}>
                        <Modal.Header>Edit News</Modal.Header>
                        <Modal.Body>
                            <div className="space-y-6">
                            <form className="mx-auto" onSubmit={handleUpdate} method="PATCH">
                                <input type="hidden" name="id" value={editingNews?.id} />
                                <div className="mb-3">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">News Name</label>
                                    <input autoComplete="off" type="text" id="name" name="name" defaultValue={editingNews?.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input autoComplete="off" type="email" id="email" name="email" defaultValue={editingNews?.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default Password</label>
                                    <input autoComplete="off" type="text" id="password" name="password" defaultValue={editingNews?.password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                                </div>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                            </form>
                            </div>
                        </Modal.Body>
                    </Modal> */}
                </div>

            </main>
        </div>
    )
}
