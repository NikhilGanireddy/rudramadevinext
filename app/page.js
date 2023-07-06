import Image from 'next/image'
import Link from "next/link";

export default function Home() {
    return (
        <div className="p-4  rounded-xl border h-full flex flex-col justify-center items-center gap-6">
            <h1>Rudramadevi Girls Hostel</h1>
            <Link className="bg-black text-gray-300 px-6 py-2 rounded-lg border" href={"/login"}>Login</Link>
        </div>
    )
}
