// "use client"
import axios from "axios";
import {MdDelete} from "react-icons/md";
import {FiEdit} from "react-icons/fi";
import axiosdefaultsbaseUrl from "@/helpers/axiosDefault";

async function Students() {

    const users = await axios.get(`${axiosdefaultsbaseUrl}/api/admin/students`)
    console.log("==================================================================================")
    const usersData = users?.data
    return <div className="rounded-2xl backdrop-blur-sm w-full h-full overflow-y-auto flex flex-col gap-4 xl:gap-6">
        <h1>Students</h1>
        <div>
            <button className="px-6 py-2 rounded-xl bg-gray-300 text-black font-semibold">Enter Student Details</button>
        </div>
        <div
            className="grid grid-rows-none grid-cols-1 md:grid-cols-2 lg:grid-rows-3 xl:grid-cols-4 gap-4 overflow-y-auto">

            {usersData.map(user=>{
                return <div className="p-3 w-full h-max rounded-xl bg-white/10 backdrop-blur-sm flex justify-between items-center" key={user._id}>
                    <h2>{user.name}</h2>
                    <div className="flex justify-center items-center gap-2">
                        <FiEdit className="cursor-pointer"/>
                        <MdDelete className="cursor-pointer text-red-700" size={20}/>
                    </div>
                </div>
            })}
        </div>
    </div>
}

export default Students