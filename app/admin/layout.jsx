"use client"
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import {useGlobalUserContext} from "@/context/userContext";
import Link from "next/link";
import {useRouter} from "next/navigation";

const AdminLayout = ({children}) => {
    const {userData, setUserData, ready, setReady} = useGlobalUserContext()
    const router = useRouter()
    if (!ready) return "Loading..."

    if (ready && !userData) {
        return <Link href={"/login"}/>
    }

    if (ready && userData) {
        if (userData?.isAdmin) {
            return <div
                className="bg-black text-gray-300 h-full max-w-[2560px] w-full gap-6 grid grid-cols-12 grid-rows-1 ">
                <Sidebar/>
                <div className="col-span-10 gap-6 flex flex-col">
                    <Header/>
                    {children}
                </div>
            </div>
        } else {
            return router.push("/")
        }
    }
}
export default AdminLayout