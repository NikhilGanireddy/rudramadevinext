"use client"
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";
import {useGlobalUserContext} from "@/context/userContext";

const LoginPage = () => {
    const {userData, setUserData, ready, setReady}= useGlobalUserContext()
    const [inputUser, setInputUser] = useState({
        name: "", password: ""
    })
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const loginUser = async () => {
        try {
            setLoading(true)
            console.log(inputUser)

            const response = await axios.post("/api/login", {name:inputUser.name, password:inputUser.password})
            // console.log(response.data?.user?.isAdmin)
            setUserData(response.data?.user)
            // console.log(response.data?.user)
            setLoading(false)
            setReady(true)
            if (response.data?.user?.isAdmin) {
                router.push("/admin/dashboard")
            } else {
                router.push("/user/dashboard")
                // router.refresh()
            }
        } catch (err) {
            alert(err.response.data.error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        router.refresh()
    }, [ready]);

    return <div className="flex flex-col gap-6 justify-center items-center">
        <h1>LoginPage</h1>
        <hr className="w-full"/>
        <form className=" mt-6 border rounded-xl p-12 w-1/2 flex flex-col gap-12">
            <label className="pl-6 text-lg font-semibold">Name
                <input
                    type="text"
                    placeholder="Name"
                    value={inputUser.name}
                    onChange={(event) => setInputUser({...inputUser, name: event.target.value})}
                    className=" px-6 py-2 rounded-lg border bg-transparent w-full mt-3"
                />
            </label>

            <label className="pl-6 text-lg font-semibold">Password
                <input
                    type="text"
                    placeholder="Password"
                    value={inputUser.password}
                    onChange={(event) => setInputUser({...inputUser, password: event.target.value})}
                    className=" px-6 py-2 rounded-lg border bg-transparent w-full mt-3"
                />
            </label>

            <button
                onClick={loginUser}
                disabled={loading}
                className="px-6 py-2 rounded-lg border-none bg-neutral-300 cursor-pointer text-black font-bold disabled:cursor-not-allowed disabled:bg-black/30 disabled:text-white"
                type="submit">
                {loading ? "Logging in" : "Login"}
            </button>
        </form>
    </div>
}

export default LoginPage