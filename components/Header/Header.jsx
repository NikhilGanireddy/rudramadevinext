"use client"
import {useGlobalUserContext} from "@/context/userContext";
import Link from "next/link";
import {CgMenuRightAlt} from "react-icons/cg";

const Header = () => {
    const {userData,  ready, showSideBar, setShowSideBar} = useGlobalUserContext()

    if (!ready) return "Loading..."

    if (ready && !userData) {
        return <Link href={"/login"}/>
    }

    const handleSidebar=()=>{
        setShowSideBar(!showSideBar)
    }

    if (ready && userData) {
        return <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border-none flex justify-between items-center">
            <h1>Hello {userData?.name}</h1>
            <div className="block md:hidden cursor-pointer duration-200 transition-all"
                onClick={handleSidebar}>
                <CgMenuRightAlt className={`${showSideBar?" rotate-180": ""} duration-200 transition-all`} size={20}/>
            </div>
        </div>
    }
}


export default Header