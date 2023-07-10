"use client";
import { useGlobalUserContext } from "@/context/userContext";
import axios from "axios";
import { useRouter } from "next/navigation";

const AdminLogout = () => {
  const { userData, setReady } = useGlobalUserContext();
  const router = useRouter();

  const logout = async () => {
    const response = await axios.get("/api/logout");
    setReady(false);
    console.log(response.data);
    window.location.reload();
  };

  return (
    <div className="w-full h-full rounded-2xl bg-white/10 backdrop-blur-sm p-4 flex flex-col justify-center items-center">
      <h2>
        Logged in as
        <span className="text-2xl font-bold">&nbsp;{userData?.name}</span>
      </h2>
      <h2>
        User Type :{" "}
        <span className="text-2xl font-bold">
          {userData?.isAdmin ? "Admin" : "User"}
        </span>
      </h2>

      <button
        className="px-6 py-2 bg-gray-300 text-black border-none hover:bg-gray-400 rounded-xl outline-none font-bold mt-6 duration-200 transition-all"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default AdminLogout;
