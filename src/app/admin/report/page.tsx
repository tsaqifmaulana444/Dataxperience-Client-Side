import AdminSideBar from '@/app/components/backend/AdminSideBar'
import '../../../../public/styles/style.css'
import AdminNavbar from '@/app/components/backend/AdminNavbar'
// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function page() {
    return (
        <div className='flex w-full '>
            <AdminSideBar />
            <main className="ml-[19vw] w-full h-full">
                <AdminNavbar />
                <div className="flex w-fit mt-[7vh] justify-between mx-[3vw]">
                    <h1 className="font-bold text-[24px]">Report Problem</h1>
                </div>
                <form action="" method='POST' className="mt-[3vh] mx-[3vw]">
                    <div>
                        <p className='text-[14px] opacity-70'>Which page where did you find the problem?</p>
                        <select name="" id="" className="bg-white border border-[#D0D0D0] rounded-md mt-[1vh] w-full h-[6vh] px-[1vw]">
                            <option value="">1</option>
                            <option value="">2</option>
                        </select>
                    </div>
                    <div className='mt-[2vh]'>
                        <p className='text-[14px] opacity-70'>Provide screenshot of the problem page.</p>
                        <input type="file" className='bg-white border border-[#D0D0D0] rounded-md mt-[1vh] w-full h-[6vh] px-[1vw] py-[1vh] text-[11px] opacity-70'/>
                    </div>
                    <div className='mt-[2vh]'>
                        <p className='text-[14px] opacity-70'>Tell us suggestion for fixing the problem.</p>
                        <textarea name="" id="" className='bg-white border border-[#D0D0D0] rounded-md mt-[1vh] w-full h-[21vh] px-[1vw] pt-[1vh]' placeholder="Enter your suggestion"></textarea>
                    </div>
                    <div className="flex justify-end mt-[5vh]">
                        <button className='bg-[#57504D] text-white font-bold p-2 rounded-md text-[14px] w-[9vw]'>Send Report</button>
                    </div>
                </form>
            </main>
        </div>
    )
}
