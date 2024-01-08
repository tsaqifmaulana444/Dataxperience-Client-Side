import Footer from "../components/frontend/Footer"
import Navbar from "../components/frontend/Navbar"
import Image from "next/image"
import Profile from "../images/blank_profile.jpeg"
import Cars from "../images/car.jpeg"

export default function page() {
	return (
		<div>
			<Navbar />
			<section className="w-[82%] mx-auto">
				<div className="flex justify-between mt-[60px]">
					<div className="w-[60%]">
						<div>
							<h1 className="font-bold text-[26px]">Meet Zhang Shixing, Inspirational Machine Learning Engineer At Google Cloud.</h1>
							<div className="flex">
								<div className="w-[35px] my-2.5">
									<Image
										src={Profile}
										alt="User"
										className="rounded-full w-full object-cover"
									/>
								</div>
								<p className="w-fit my-auto ml-[10px]">Li Chen Wang - 20 July 2020</p>
							</div>
						</div>
						<div className="w-full h-[25%]">
							<Image
								src={Cars}
								alt="cars"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="mt-[40px]">
							<p className="text-[18px]"><span className="font-bold text-[20px]">California</span> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							<p className="text-[18px] mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							<p className="text-[18px] mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							<div className="mt-[30px]">
								<h1 className="text-[22px] font-bold">Read Also</h1>
								<div className="flex mt-[20px] cursor-pointer">
									<div className="w-[50%]">
										<Image
											src={Cars}
											alt="cars"
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="ml-[20px] w-[50%]">
										<div className="w-fit bg-[#1E7610] text-white px-3 py-1.5 text-xs font-bold mt-[10px]">Inspirational</div>
										<h1 className="font-bold text-[15px] mt-[5px]">A Story From Zambia, From Nothing To Work As Data Analyst In Her Country.</h1>
										<p className="text-[12px] opacity-70 mt-[5px]">Today inspirational story came from a woman called Naomi Bonolo, She was born in the capital city of the country Lusaka. She was born poor without...</p>
										<p className="text-[15px] opacity-70 mt-[5px]">1 Day Ago</p>
									</div>
								</div>
							</div>
							<p className="text-[18px] mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
						<p className="text-[18px] mt-[30px]">Read Also: <u className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing.</u></p>
						<div className="flex mt-[60px] mb-[90px]">
							<div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold">Inspirational</div>
							<div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold ml-[10px]">Inspirational</div>
						</div>
					</div>
					<aside className="w-[20%]">
						<p className="font-bold text-[18px] text-gray-400 text-center align-middle mt-40">Advertisement</p>
					</aside>
				</div>
			</section>
			<Footer />
		</div>
	)
}
