"use client";
import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const GlobalUserContext = createContext({});

export const GlobalUserContextProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (!userData) {
            axios.get("/api/onrefreshgetdata", {
                withCredentials: true,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },

            }).then((response) => {
                console.log(response)
                // setUserData(response.data)
                setReady(true);
            })
        }
    }, [userData]);

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
