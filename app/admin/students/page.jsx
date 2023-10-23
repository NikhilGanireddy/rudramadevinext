import {FiEdit} from "react-icons/fi";
import Link from "next/link";
import {getUsersFromRoute} from "@app/api/admin/students/route";
import {useGlobalUserContext} from "@context/userContext";

const getUsers = async () => {
    const userssss = await getUsersFromRoute()
    // console.log(userssss)
    return userssss
}
const Students = async () => {
    // const {allUsers, setAllUsers} = useGlobalUserContext()
    console.log("===============================================================")
    // console.log(getUsers())
    const allUsers= await getUsers()
    console.log(allUsers)
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

    return <div className="rounded-2xl backdrop-blur-sm w-full h-full overflow-y-auto flex flex-col gap-6 xl:gap-6">
        <div className="w-full flex justify-between items-center">
            <h1>Students</h1>
        </div>
        <div>
            <Link href={"/admin/students/newstudent"}
                  className="px-6 py-3 rounded-xl bg-gray-300 text-black font-semibold">Create Student</Link>
        </div>
        <div
            className="grid grid-rows-none grid-cols-1 md:grid-cols-2 lg:grid-rows-3 xl:grid-cols-4 gap-4 overflow-y-auto">
            {allUsers?.map(user => {
                return <div
                    className="p-3 w-full h-max rounded-xl bg-white/10 backdrop-blur-sm flex justify-between items-center"
                    key={user._id}>
                    <h2>{user.name}</h2>
                    <div className="flex justify-center items-center gap-2">
                        <Link href={`/admin/students/${user.hallTicket}`}>
                            <FiEdit/>
                        </Link>
                    </div>
                </div>
            })}
        </div>
    </div>
}

export default Students
