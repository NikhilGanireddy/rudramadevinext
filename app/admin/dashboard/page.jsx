"use client"
import {useParams} from "next/navigation";

const Dashboard = () => {
    const params = useParams()
    alert(params)
    return <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl border-none h-full">Dashboard</div>
}

export default Dashboard