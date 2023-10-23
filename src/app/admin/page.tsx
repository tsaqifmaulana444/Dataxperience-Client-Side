import AdminNavbar from "../components/backend/AdminNavbar"
import AdminSideBar from "../components/backend/AdminSideBar"

export default function page() {
    return (
        <div className='flex w-full '>
            <AdminSideBar />
            <main className="bg-[#F2F3F7] ml-[19vw] w-full h-full">
                <AdminNavbar/>
                <p>tes</p>
            </main>
        </div>
    )
}
