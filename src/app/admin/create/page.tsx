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
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import toast, { Toaster } from 'react-hot-toast'

interface Authors {
    id?: number
    name: string
    email: string
    password: string
}

export default function AuthorPage() {
    const [authors, setAuthors] = useState<Authors[]>([])
    const [newAuthors, setNewAuthors] = useState('')
    const [error, setError] = useState('')
    const [openModalCreate, setOpenModalCreate] = useState(false)
    const [openModalUpdate, setOpenModalUpdate] = useState(false)
    const [editingAuthor, setEditingAuthor] = useState<Authors | null>(null)
    const [openModalDelete, setOpenModalDelete] = useState(false)

    // create
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const data: Authors = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string,
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
                await fetchAuthors()
                setNewAuthors('')
                setOpenModalCreate(false)
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
    const fetchAuthors = async () => {
        try {
            const response = await fetch('/api/account', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            console.log(response)
            if (response.ok) {
                const { authors } = await response.json()
                setAuthors(authors)
            } else {
                const error = await response.json()
                setError(error.message)
            }
        } catch (error) {
            console.error('Error fetching authors:', error)
            setError('Internal Server Error')
        }
    }

    // update
    const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
      
        const formData = new FormData(event.currentTarget)
        const data: Authors = {
          id: parseInt(formData.get("id") as string),
          name: formData.get("name") as string,
          email: formData.get("email") as string,
          password: formData.get("password") as string,
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
            await fetchAuthors()
            setOpenModalUpdate(false)
            toast.success('Data Successfully Updated!')
          } else {
            const error = await response.json()
            console.error("Failed to update author:", error.message)
          }
        } catch (error) {
          console.error("Error:", error)
        }
      }
      

    // delete
    const handleDelete = async (id?: number) => {
        try {
            const response = await fetch(`/api/account/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if (response.ok) {
                await fetchAuthors()
                setOpenModalDelete(false)
                toast.success('Data Successfully Deleted!')
            } else {
                const error = await response.json()
                console.error("Failed to delete author:", error.message)
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

    useEffect(() => {
        fetchAuthors()
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
                    <h1 className="font-bold text-[24px]">Account Panel</h1>
                    <button className="bg-[#262524] text-white p-2 rounded-md text-[13px] font-medium" onClick={() => setOpenModalCreate(true)}><FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} /> Add Account</button>
                </div>
                <Modal show={openModalCreate} onClose={() => setOpenModalCreate(false)}>
                    <Modal.Header>Create An Account</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <form className="mx-auto" onSubmit={handleSubmit} method="POST">
                                <div className="mb-3">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author Name</label>
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
                                    #
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    NAME
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ACCOUNT
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {authors.map((author, index) => (
                                <tr key={author.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-6 py-4 text-gray-900">{index + 1}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{author.name}</td>
                                    <td className="px-6 py-4">{author.email}</td>
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
                                                        <Button color="failure" onClick={() => { setOpenModalDelete(false); handleDelete(author.id) }}>
                                                            {"Yes, I'm sure"}
                                                        </Button>

                                                        <Button color="gray" onClick={() => setOpenModalDelete(false)}>
                                                            No, cancel
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Modal.Body>
                                        </Modal>
                                        <button
                                            onClick={() => {
                                                setEditingAuthor(author)
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
                        <Modal.Header>Edit Account</Modal.Header>
                        <Modal.Body>
                            <div className="space-y-6">
                            <form className="mx-auto" onSubmit={handleUpdate} method="PATCH">
                                <input type="hidden" name="id" value={editingAuthor?.id} />
                                <div className="mb-3">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author Name</label>
                                    <input autoComplete="off" type="text" id="name" name="name" defaultValue={editingAuthor?.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input autoComplete="off" type="email" id="email" name="email" defaultValue={editingAuthor?.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default Password</label>
                                    <input autoComplete="off" type="text" id="password" name="password" defaultValue={editingAuthor?.password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                                </div>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                            </form>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>

            </main>
        </div>
    )
}
