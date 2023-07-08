"use client";
import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const GlobalUserContext = createContext({});

export const GlobalUserContextProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const data = await axios.get("/api/onrefreshgetdata")
                console.log(data.data.user)
                setUserData(data.data.user)
                setReady(true)
                return data
            } catch (e) {
                console.log(e)
            }
        })()
    }, []);

    // console.log(userData)

    return (
        <GlobalUserContext.Provider
            value={{userData, setUserData, ready, setReady}}
        >
            {children}
        </GlobalUserContext.Provider>
    );
};

export const useGlobalUserContext = () => useContext(GlobalUserContext);
