"use client"

import Footer from "../../components/frontend/Footer"
import Navbar from "../../components/frontend/Navbar"
import Image from "next/image"
import Profile from "../../images/blank_profile.jpeg"
import { useEffect, useState } from 'react'

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
}

interface Category {
	id: number
	name: string
}

export default function DetailPage({ params }: { params: { id: string } }) {
	const id = parseInt(params.id)

	const [newsDetail, setNewsDetail] = useState<News | null>(null)
	const [error, setError] = useState('')
	const [categories, setCategories] = useState<Category[]>([])
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

	const getCategoryNames = (categoryIds?: number[] | null): string => {
		if (!categoryIds || categoryIds.length === 0) return ''

		const category = categories.find((c) => c.id === categoryIds[0])

		return category ? category.name : ''
	}


	const formatDate = (timestamp: string | number | Date | undefined): string => {
		if (!timestamp) {
			return "N/A"
		}

		const date = new Date(timestamp)
		return date.toLocaleDateString('en-GB')
	}


	const getCategoryColour = (categoryIds?: number[] | null): string => {
		if (!categoryIds || categoryIds.length === 0) return '#1E7610'

		const primaryCategoryId = categoryIds[0]
		const category = categories.find((c) => c.id === primaryCategoryId)

		const colourMap: Record<number, string> = {
			1: '#1E6D47',
			2: '#134074',
			3: '#D12626',
			4: '#1E7610',
			5: '#CD8210',
			6: '#6FAE1E',
			7: '#34A5AC',
			8: '#141414'
		}

		return category && colourMap[category.id] ? colourMap[category.id] : '#1E7610'
	}

	useEffect(() => {
		const fetchNewsDetail = async () => {
			try {
				const response = await fetch(`/api/news/${id}`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				})

				if (response.ok) {
					const { news } = await response.json()
					setNewsDetail(news)
				} else {
					const error = await response.json()
					console.error('Error fetching news detail:', error.message)
				}
			} catch (error) {
				console.error('Error fetching news detail:', error)
			}
		}

		if (id) {
			fetchNewsDetail()
			fetchCategories()
		}
	}, [id])

	if (!newsDetail) {
		return <p>Loading...</p>
	}
	return (
		<div>
			<Navbar />
			<section className="w-[82%] mx-auto">
				<div className="flex justify-between sm:mt-[60px] mt-[40px]">
					<div className="sm:w-[60%] w-[100%]">
						<div>
							<h1 className="font-bold sm:text-[26px] text-[20px]">{newsDetail.title}</h1>
							<div className="flex">
								<div className="sm:w-[35px] w-[30px] my-2.5">
									<Image
										src={Profile}
										alt="news image"
										className="rounded-full w-full object-cover"
									/>
								</div>
								<p className="w-fit my-auto ml-[10px] sm:text-[15px] text-[13px]">Wang Xiaotian - 20 July 2020</p>
							</div>
						</div>
						<div className="w-full sm:h-[25%] h-[200px]">
							<Image
								src={newsDetail.news_image}
								width={500}
								height={500}
								alt="news image"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="sm:mt-[40px] mt-[20px] sm:text-[18px] text-[15px]" dangerouslySetInnerHTML={{ __html: newsDetail.news_body }}>
						</div>
						<p className="sm:text-[18px] text-[14px] mt-[30px]">Read Also: <u className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing.</u></p>
						<div className="flex sm:mt-[60px] sm:mb-[90px] mt-[30px] mb-[60px]">
							{newsDetail.category_ids && newsDetail.category_ids.map((categoryId, index) => (
								<div
									key={index}
									className={`w-fit text-white px-3 py-2 text-xs font-bold ${index > 0 ? 'ml-[10px]' : ''}`}
									style={{ backgroundColor: getCategoryColour([categoryId]) }}
								>
									{getCategoryNames([categoryId])}
								</div>
							))}
						</div>
					</div>
					<aside className="w-[20%] sm:block hidden">
						<p className="font-bold text-[18px] text-gray-400 text-center align-middle mt-40">Advertisement</p>
					</aside>
				</div>
			</section>
			<Footer />
		</div>
	)
}
