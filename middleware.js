import {cookies} from "next/headers";
import jwt from "jsonwebtoken";
import {NextResponse} from "next/server";
import {useGlobalUserContext} from "@/context/userContext";

export function middleware(request) {

    const path = request.nextUrl.pathname;
    const loginRouter = path === "/login" || "/signup"
    const token = request.cookies.get("token")

    if (loginRouter && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }
}

export const config = {
    matcher: [ "/login", "/signup"],
};
