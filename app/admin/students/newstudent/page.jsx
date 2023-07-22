"use client"
import {useGlobalUserContext} from "@/context/userContext";
import {useRouter} from "next/navigation";
import {useState} from "react";
import axios from "axios";

const NewStudent = () => {
    const router = useRouter()
    const {userData, setUserData, ready, setReady} = useGlobalUserContext();
    const [creating, setCreating] = useState(false)
    const [name, setname] = useState("")
    const [hallTicket, sethallTicket] = useState("")
    const [room, setroom] = useState("")
    const [year, setyear] = useState("")
    const [branch, setbranch] = useState("")
    const [mobile, setmobile] = useState("")
    const [motherName, setmotherName] = useState("")
    const [fatherName, setfatherName] = useState("")
    const [motherMobile, setmotherMobile] = useState("")
    const [fatherMobile, setfatherMobile] = useState("")

    const goBack = (ev) => {
        ev.preventDefault()
        router.back()
    }

    const createUser = async () => {
        try {
            setCreating(true)
            const response = await axios.post("https://rudramadevi.vercel.app/api/admin/students/createstudent", {
                name,
                hallTicket,
                room,
                year,
                branch,
                mobile,
                motherMobile,
                motherName,
                fatherMobile,
                fatherName
            })
            setname("");
            setmobile("");
            setbranch("");
            setfatherMobile("");
            setmotherMobile("");
            setfatherName("");
            setmotherName("");
            setyear("");
            setroom("");
            sethallTicket("")
            setCreating(false)
            alert(response?.data)
            console.log(response)
        } catch (err) {
            console.log(err)
        } finally {
            setCreating(false)
        }
    }


    return <div className="w-full rounded-2xl bg-white/10 backdrop-blur-sm overflow-y-auto h-full p-4 space-y-12">
        <div className="flex justify-between items-center">
            <h1>Enter Student Details</h1>
            <button className="underline font-light text-sm" onClick={(ev) => goBack(ev)}>Go Back</button>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-rows-3 xl:grid-cols-4 gap-6">
            <div className="flex flex-col gap-1">
                <label className="px-4">Name</label>
                <input
                    className="outline-none bg-black/10 border border-neutral-700 px-4 py-2 rounded-lg placeholder:text-neutral-700"
                    type="text"
                    placeholder="Nikhil Ganireddy"
                    value={name}
                    onChange={(ev) => {
                        ev.preventDefault()
                        return setname(ev.target.value)
                    }}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="px-4">HallTicket No</label>
                <input
                    className="outline-none bg-black/10 border border-neutral-700 px-4 py-2 rounded-lg placeholder:text-neutral-700"
                    type="text"
                    placeholder="20017T0901"
                    value={hallTicket}
                    onChange={(ev) => {
                        ev.preventDefault()
                        return sethallTicket(ev.target.value)
                    }}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="px-4">Room</label>
                <input
                    className="outline-none bg-black/10 border border-neutral-700 px-4 py-2 rounded-lg placeholder:text-neutral-700"
                    type="text"
                    placeholder="A2"
                    value={room}
                    onChange={(ev) => {
                        ev.preventDefault()
                        return setroom(ev.target.value)
                    }}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="px-4">Year</label>
                <input
                    className="outline-none bg-black/10 border border-neutral-700 px-4 py-2 rounded-lg placeholder:text-neutral-700"
                    type="text"
                    placeholder="Final Year"
                    value={year}
                    onChange={(ev) => {
                        ev.preventDefault()
                        return setyear(ev.target.value)
                    }}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="px-4">Branch</label>
                <input
                    className="outline-none bg-black/10 border border-neutral-700 px-4 py-2 rounded-lg placeholder:text-neutral-700"
                    type="text"
                    placeholder="CSE"
                    value={branch}
                    onChange={(ev) => {
                        ev.preventDefault()
                        return setbranch(ev.target.value)
                    }}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="px-4">Mobile</label>
                <input
                    className="outline-none bg-black/10 border border-neutral-700 px-4 py-2 rounded-lg placeholder:text-neutral-700"
                    type="text"
                    placeholder="8333020599"
                    value={mobile}
                    onChange={(ev) => {
                        ev.preventDefault()
                        return setmobile(ev.target.value)
                    }}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="px-4">Mother Name</label>
                <input
                    className="outline-none bg-black/10 border border-neutral-700 px-4 py-2 rounded-lg placeholder:text-neutral-700"
                    type="text"
                    placeholder="Janaki Ganireddy"
                    value={motherName}
                    onChange={(ev) => {
                        ev.preventDefault()
                        return setmotherName(ev.target.value)
                    }}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="px-4">Father Name</label>
                <input

                    className="outline-none bg-black/10 border border-neutral-700 px-4 py-2 rounded-lg placeholder:text-neutral-700"
                    type="text"
                    placeholder="Naidu Ganireddy"
                    value={fatherName}
                    onChange={(ev) => {
                        ev.preventDefault()
                        return setfatherName(ev.target.value)
                    }}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="px-4">Mother Mobile</label>
                <input
                    className="outline-none bg-black/10 border border-neutral-700 px-4 py-2 rounded-lg placeholder:text-neutral-700"
                    type="text"
                    placeholder="1234567899"
                    value={motherMobile}
                    onChange={(ev) => {
                        ev.preventDefault()
                        return setmotherMobile(ev.target.value)
                    }}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="px-4">Father Mobile</label>
                <input
                    className="outline-none bg-black/10 border border-neutral-700 px-4 py-2 rounded-lg placeholder:text-neutral-700"
                    type="text"
                    placeholder="9987654321"
                    value={fatherMobile}
                    onChange={(ev) => {
                        ev.preventDefault()
                        return setfatherMobile(ev.target.value)
                    }}
                />
            </div>
        </div>
        <button className={`${creating ? " bg-gray-500" : "bg-gray-300"} px-6 py-2 font-semibold rounded-lg text-black`}
                onClick={createUser}>{creating ? "Creating" : "Create"}
        </button>
    </div>
}

export default NewStudent