"use client"
import sidebar from "@/data/sidebar";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useGlobalUserContext} from "@/context/userContext";
import {IoMdClose} from "react-icons/io";

const Sidebar = () => {
    const {showSideBar, setShowSideBar} = useGlobalUserContext();
    const pathName = usePathname();
    const string = pathName.split("/")

    const sideBarName = string[2]
    // console.log(sideBarName)

    const handleSidebar=()=>{
        setShowSideBar(!showSideBar)
    }

    return (<div className="relative space-x-0">
            <div
                className=" hidden md:block col-span-2 h-full p-2 px-4 bg-white/10 backdrop-blur-sm rounded-xl border-none min-w-[260px]">
                <h1 className="px-4 py-2">
                    <Link href={"/"}>Rudramadevi</Link>
                </h1>
                <div className=" mt-12 flex flex-col gap-2">
                    {sidebar.map((navLink) => {
                        let shortUrl = (navLink.url.split("/"))[2]
                        return (
                            <Link
                                id={navLink.id}
                                href={navLink.url}
                                key={navLink.id}
                                className={`px-4 text-lg font-semibold py-2 rounded-lg transition-all duration-200 cursor-pointer hover:bg-gray-300 hover:text-black ${sideBarName === shortUrl ? " bg-gray-300 text-black " : ""}`}
                            >
                                {navLink.title}
                            </Link>
                        );
                    })}
                </div>
            </div>
            {showSideBar && <div
                className="transition-all duration-200 block md:hidden absolute top-0 left-0 z-50 col-span-2 h-full p-2 px-4 bg-black/20 text-white backdrop-blur-3xl rounded-xl border-none min-w-[260px]">
                <div className=" flex justify-between items-center">
                    <h1 className="px-2 text-2xl py-2">
                        <Link href={"/"}>Rudramadevi</Link>
                    </h1>
                    <div className="cursor-pointer" onClick={handleSidebar}>
                        <IoMdClose/>
                    </div>
                </div>
                <div className=" mt-12 flex flex-col gap-2">
                    {sidebar.map((navLink) => {
                        let shortUrl = (navLink.url.split("/"))[2]
                        return (
                            <Link
                                id={navLink.id}
                                href={navLink.url}
                                key={navLink.id}
                                className={`px-4  font-semibold py-2 rounded-lg transition-all duration-200 cursor-pointer hover:bg-gray-300 hover:text-black ${sideBarName === shortUrl ? " bg-gray-300 text-black " : ""}`}
                                onClick={() => setShowSideBar(false)}
                            >
                                {navLink.title}
                            </Link>
                        );
                    })}
                </div>
            </div>}
        </div>
    );
};

export default Sidebar;
