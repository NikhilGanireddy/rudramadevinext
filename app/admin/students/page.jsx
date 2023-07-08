"use client"
import {useGlobalUserContext} from "@/context/userContext";

const Students = () => {
    const {userData, setUserData, ready, setReady} = useGlobalUserContext()

    return <div className="w-full h-full rounded-2xl bg-white/10 py-6 px-4  overflow-y-auto flex gap-12 flex-col">
        <h1>Students</h1>

    </div>
}

export default Students