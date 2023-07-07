"use client"
import Link from "next/link";
import {useEffect} from "react";
import axios from "axios";
import {useGlobalUserContext} from "@/context/userContext";

export default function Home() {
    const {userData} = useGlobalUserContext()

    return (
        <div className="p-4 rounded-xl border h-full flex flex-col justify-center items-center gap-6">
            <h1>Rudramadevi Girls Hostel</h1>
            {userData ? <Link className="bg-black text-gray-300 px-6 py-2 rounded-lg border"
                              href={`/${(userData?.isAdmin) ? "admin" : "user"}/dashboard`}>Go to Dashboard</Link>
                : <Link className="bg-black text-gray-300 px-6 py-2 rounded-lg border" href={"/login"}>Login</Link>
            }
        </div>
    )
}
