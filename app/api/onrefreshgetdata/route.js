import jwt, {sign} from "jsonwebtoken";
import {NextRequest, NextResponse} from "next/server";
import connectDB from "@/lib/mongoDatabase";
import {cookies} from "next/headers";
import {serialize} from "cookie";

connectDB()

export async function GET(request) {
    const SECRET_KEY = "nikhilganireddy25345"
    const cookieStore = cookies()
    const token = cookieStore.get("token")
    if (!token) {
        // console.log("hi")
        return NextResponse.json(null)
    }
    else {
        const tokendata = token.value
        const decodedToken = jwt.verify(tokendata, SECRET_KEY)
        // console.log()

        // const adminToken = sign(
        //     decodedToken.user.isAdmin,
        //     SECRET_KEY,
        //     {expiresIn: 60 * 24 * 30}
        // )
        //
        // const adminSerialised = serialize("adminToken", adminToken, {
        //     httpOnly: true, sameSite: "strict", maxAge: 60 * 24 * 30, path: "/"
        // })

        return NextResponse.json(decodedToken,
            // {status:200, headers: {"Set-Cookie": serialised}}
        )
    }
}
