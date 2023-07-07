"use client"
import {useGlobalUserContext} from "@/context/userContext";

const AdminLogout = () => {
    const {userData} = useGlobalUserContext()

    return <div
        className="w-full h-full rounded-2xl bg-white/10 backdrop-blur-sm p-4 flex flex-col justify-center items-center">
        <h2>
            Logged in as
            <span className="text-2xl font-bold">
                &nbsp;{userData?.name}
            </span>
        </h2>
        <h2>
            User Type : <span className="text-2xl font-bold">
            {(userData?.isAdmin)?"Admin":"User"}
        </span>
        </h2>
    </div>
}

export default AdminLogout