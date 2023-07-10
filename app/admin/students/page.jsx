"use client"
import {useGlobalUserContext} from "@/context/userContext";

const Students = () => {
    const {userData, setUserData, ready, setReady} = useGlobalUserContext()

    return <div className="h-full w-full min-h-0 rounded-2xl overflow-y-auto flex flex-col gap-6">
        <div className="grid grid-rows-1">
            <div className="grid gap-2 md:gap-4 xl:gap-6 grid-cols-1 grid-rows-3 md:grid-cols-12 md:grid-rows-1">
                <div
                    className=" p-4 sm:col-span-full md:col-span-4 rounded-2xl min-h-[350px] bg-white/10 backdrop-blur-sm"></div>
                <div
                    className=" p-4 sm:col-span-full md:col-span-4 rounded-2xl min-h-[350px] bg-white/10 backdrop-blur-sm"></div>
                <div
                    className=" p-4 sm:col-span-full md:col-span-4 rounded-2xl min-h-[350px] bg-white/10 backdrop-blur-sm"></div>
            </div>
        </div>
        <div className="grid grid-rows-1 h-full  overflow-y-auto">
            <div className=" grid gap-2 grid-cols-1 grid-rows-1 h-max">
                <div className="p-4 sm:col-span-full md:col-span-6 rounded-2xl backdrop-blur-sm h-full bg-white/10 min-h-full flex flex-col gap-4">
                    <h1>Room</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-6 h-max">
                        <div className="p-3 px-4 rounded-xl bg-black/10 backdrop-blur-sm"><h1>Nikhil Ganireddy</h1></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                        <div className="p-6 rounded-xl bg-black/10 backdrop-blur-sm"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default Students