
import {NextResponse} from "next/server";

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
