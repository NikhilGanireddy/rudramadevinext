import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

const AdminLayout = ({children}) => {

    return <div
        className="bg-black text-gray-300 h-screen max-w-[2560px] w-full p-6 gap-6 grid grid-cols-12 grid-rows-1 ">
        <Sidebar/>
        <div className="col-span-10 gap-6 flex flex-col">
            <Header/>
            {children}
        </div>
    </div>
}
export default AdminLayout