"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const GlobalUserContext = createContext({});

export const GlobalUserContextProvider = ({ children }) => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!userData) {
      axios.get("/api/onrefreshgetdata", { withCredentials: true }).then((response) => {
        // console.log(response.data)
        setUserData(response.data);
        setReady(true);
      });
    }
  }, []);

  // console.log(userData)

  return (
    <GlobalUserContext.Provider
      value={{ userData, setUserData, ready, setReady }}
    >
      {children}
    </GlobalUserContext.Provider>
  );
};

export const useGlobalUserContext = () => useContext(GlobalUserContext);
