"use client"
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import { useGlobalUserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";

const AdminLayout = ({ children }) => {
    const { userData, ready } = useGlobalUserContext()
    const router = useRouter()
    if (!ready) return "Loading..."

    if (ready && !userData) {
        return router.push("/")
    }

    if (ready && userData) {
        if (userData?.isAdmin) {
            return <div
                className="bg-black text-gray-300 h-full max-w-[2560px] w-full gap-0 md:gap-6 flex">
                <Sidebar />
                <div className="col-span-10 gap-6 flex flex-col w-full">
                    <Header />
                    {children}
                </div>
            </div>
        } else {
            return router.push("/")
        }
    }
}
export default AdminLayout