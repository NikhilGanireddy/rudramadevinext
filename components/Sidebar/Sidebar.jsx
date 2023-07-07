import sidebar from "@/data/sidebar";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className=" col-span-2 h-full p-2 bg-white/10 backdrop-blur-sm rounded-xl border-none">
      <h1 className="px-4 py-2">
        <Link href={"/"}>Rudramadevi</Link>
      </h1>
      <div className=" mt-12 flex flex-col gap-2">
        {sidebar.map((navlnk) => {
          return (
            <Link
              id={navlnk.id}
              href={navlnk.url}
              key={navlnk.id}
              className="px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer hover:bg-gray-300 hover:text-black"
            >
              {navlnk.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
