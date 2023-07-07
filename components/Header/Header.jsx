"use client"
import {useGlobalUserContext} from "@/context/userContext";
import Link from "next/link";

const Header = () => {
    const {userData, setUserData, ready, setReady} = useGlobalUserContext()

    if (!ready) return "Loading..."

    if (ready && !userData) {
        return <Link href={"/login"}/>
    }

    if (ready && userData) {
        return <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border-none">
            <h1>Hello {userData?.name}</h1>
        </div>
    }
}


export default Header