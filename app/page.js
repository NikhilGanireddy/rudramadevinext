"use client"
import Link from "next/link";
import {useEffect} from "react";
import axios from "axios";
import {useGlobalUserContext} from "@/context/userContext";

export default function Home() {
    const {userData, setUserData, ready, setReady} = useGlobalUserContext()


    if (ready && !userData) {
        return <Link href={"/login"}/>
    }

    return (
        <div className="p-4 rounded-xl border h-full flex flex-col justify-center items-center gap-6">
            <h1>Rudramadevi Girls Hostel</h1>

            <div>
                {(ready && !userData) &&
                    <Link className="bg-black text-gray-300 px-6 py-2 rounded-lg border" href={"/login"}>Login</Link>}

                {(ready && userData) && <Link className="bg-black text-gray-300 px-6 py-2 rounded-lg border"
                                              href={`/${(userData?.isAdmin) ? "admin" : "user"}/dashboard`}>Go to
                    Dashboard</Link>
                }
            </div>
        </div>
    )
}

// <Link className="bg-black text-gray-300 px-6 py-2 rounded-lg border"
//       href={`/${(userData?.isAdmin) ? "admin" : "user"}/dashboard`}>Go to Dashboard</Link>
