import "./globals.css";
import {GlobalUserContextProvider} from "@/context/userContext";
import axios from "axios";
import {Rajdhani} from 'next/font/google'


const rajdhani = Rajdhani({
        subsets: ['latin'],
        weight: ["300", "400", "500", "600", "700"],
    }
)
export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    axios.defaults.withCredentials = true;

    return (
        <html lang="en">
        <body className={`${rajdhani.className} bg-black text-gray-300 h-screen mx-auto max-w-[2560px] w-full p-4 lg:p-6 gap-6 `}>
        <GlobalUserContextProvider>{children}</GlobalUserContextProvider>
        </body>
        </html>
    );
}
