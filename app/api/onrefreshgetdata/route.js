import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongoDatabase";
import { cookies } from "next/headers";

connectDB()

export async function GET(request) {
    const SECRET_KEY = "nikhilganireddy25345"
    const cookieStore = cookies()
    const token = cookieStore.get("token")
    if (!token) {
        return NextResponse.json(null)
    }
    else {
        const tokendata = token.value
        const decodedToken = jwt.verify(tokendata, SECRET_KEY)
        return NextResponse.json(decodedToken,
        )
    }
}
