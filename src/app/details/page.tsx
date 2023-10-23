import Footer from "../components/frontend/Footer"
import Navbar from "../components/frontend/Navbar"
import Image from "next/image"
import Profile from "../images/blank_profile.jpeg"
import Cars from "../images/car.jpeg"

export default function page() {
	return (
		<div>
			<Navbar />
			<section className="mx-[9vw]">
				<div className="flex mt-[7vh]">
					<div className="w-[60vw]">
						<div>
							<h1 className="font-bold text-[26px]">Meet Zhang Shixing, Inspirational Machine Learning Engineer At Google Cloud.</h1>
							<div className="flex">
								<div className="w-fit h-[5vh] my-2.5">
									<Image
										src={Profile}
										alt="User"
										width={30}
										height={30}
										className="rounded-full"
									/>
								</div>
								<p className="w-fit my-auto ml-[0.8vw]">Li Chen Wang - 20 July 2020</p>
							</div>
						</div>
						<div className="w-full h-[60vh]">
							<Image
								src={Cars}
								alt="cars"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="mt-[6vh]">
							<p className="text-[18px]"><span className="font-bold text-[20px]">California</span> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							<p className="text-[18px] mt-[5vh]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							<p className="text-[18px] mt-[5vh]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							<div className="mt-[5vh]">
								<h1 className="text-[22px] font-bold">Read Also</h1>
								<div className="flex mt-[2vh]">
									<div className="w-[21vw] h-[25vh]">
										<Image
											src={Cars}
											alt="cars"
											className="w-full h-full"
										/>
									</div>
									<div className="ml-[2vw] w-[25vw]">
										<div className="w-fit bg-[#1E7610] text-white px-3 py-1.5 text-xs font-bold mt-[1vh]">Inspirational</div>
										<h1 className="font-bold text-[15px] mt-[0.5vh]">A Story From Zambia, From Nothing To Work As Data Analyst In Her Country.</h1>
										<p className="text-[12px] opacity-70 mt-[0.5vh]">Today inspirational story came from a woman called Naomi Bonolo, She was born in the capital city of the country Lusaka. She was born poor without...</p>
										<p className="text-[15px] opacity-70 mt-[0.5vh]">1 Day Ago</p>
									</div>
								</div>
							</div>
							<p className="text-[18px] mt-[5vh]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
						<p className="text-[18px] mt-[5vh]">Read Also: <u className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing.</u></p>
						<div className="flex mt-[7vh] mb-[10vh]">
							<div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold mr-[1vw]">Inspirational</div>
							<div className="w-fit bg-[#1E7610] text-white px-3 py-2 text-xs font-bold mr-[1vw]">Inspirational</div>
						</div>
					</div>
					<div className="w-[20vw]">
						<p className="font-bold text-[18px] text-gray-400 ml-[10vw] mt-[30vh]">Advertisement</p>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	)
}
