"use client"

import AdminSideBar from '@/app/components/backend/AdminSideBar'
import '../../../../public/styles/style.css'
import AdminNavbar from '@/app/components/backend/AdminNavbar'
import Link from 'next/link'
import { useEffect, useState } from 'react'
// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


interface Authors {
    id: number
    name: string
    email: string
}

export default function AuthorPage() {
    const [authors, setAuthors] = useState<Authors[]>([])
    const [error, setError] = useState('')

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

    useEffect(() => {
        fetchAuthors()
    }, [])

    return (
        <div className='flex w-full '>
            <AdminSideBar />
            <main className="ml-[19vw] w-full h-full">
                <AdminNavbar />
                <div className="flex w-[75vw] mt-[7vh] justify-between mx-[3vw]">
                    <h1 className="font-bold text-[24px]">News Panel</h1>
                    <Link href="/admin/form">
                        <button className="bg-[#57504D] text-white p-2 rounded-md w-[9vw] text-[16px] font-medium">+ Add News</button>
                    </Link>
                </div>

                <div className="relative overflow-x-auto mx-[3vw] mt-[3vh]">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nama
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Akun
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
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
                                            // onClick={() => handleDelete(authors.id)}
                                            className="text-red-500 font-bold"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            // onClick={() => handleDelete(authors.id)}
                                            className="text-yellow-500 font-bold ml-3"
                                        >
                                            Edit
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
