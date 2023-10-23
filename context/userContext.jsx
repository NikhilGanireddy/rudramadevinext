"use client";
import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const GlobalUserContext = createContext({});

export const GlobalUserContextProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const [allUsers, setAllUsers] = useState("");
    const [ready, setReady] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                const data = await axios.get("/api/onrefreshgetdata")
                if (data.data !== null) {
                    setUserData(data.data.user)
                    setReady(true)
                }
                // else {
                //     router.push("/login")
                // }
            } catch (e) {
                console.log(e)
            }
        })()
    }, []);

    return (
        <GlobalUserContext.Provider
            value={{userData, setUserData, ready, setReady, showSideBar, setShowSideBar, allUsers, setAllUsers}}
        >
            {children}
        </GlobalUserContext.Provider>
    );
};

export const useGlobalUserContext = () => useContext(GlobalUserContext);
