"use client"
import {useGlobalUserContext} from "@/context/userContext";
import Link from "next/link";

const Dashboard = () => {

    const {userData, setUserData, ready, setReady} = useGlobalUserContext()

    if (!ready) return "Loading"

    if (ready && !userData) return <Link href={"/login"}/>

    return <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border-none h-full">Dashboard</div>
}

export default Dashboard