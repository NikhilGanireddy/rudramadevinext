"use client";
import Link from "next/link";
import {useGlobalUserContext} from "@/context/userContext";
import axios from "axios";

export default function Home() {
    const {userData,  ready} = useGlobalUserContext();

    axios.defaults.baseURL = process.env.DEFAULT_URI

    return (
        <div className=" rounded-xl border h-full flex flex-col justify-center items-center gap-6">
            <h1>Rudramadevi Girls Hostel</h1>
            <div>
                {(ready && userData) ? (
                    <Link className="bg-black text-gray-300 px-6 py-2 rounded-lg border"
                          href={`/${userData?.isAdmin ? "admin" : "user"}/dashboard`}>Go to Dashboard</Link>) : (
                    <Link className="bg-black text-gray-300 px-6 py-2 rounded-lg border"
                          href={`/login`}>Login</Link>
                )}
            </div>
        </div>
    );
}

