"use client"
import sidebar from "@/data/sidebar";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Sidebar = () => {
    const pathName = usePathname();
    const string = pathName.split("/")

    const sideBarName = string[2]
    // console.log(sideBarName)

    return (
        <div className=" hidden md:block  col-span-2 h-full p-2 px-4 bg-white/10 backdrop-blur-sm rounded-xl border-none min-w-[260px]">
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
    );
};

export default Sidebar;
