import connectDB from "@/lib/mongoDatabase";
import {NextResponse} from "next/server";
import UserModel from "models/UserModel"
import sign from "jsonwebtoken"
import serialize from "cookie";

connectDB()

export async function POST(request) {
    const SECRET_KEY = "nikhilganireddy25345"
    try {
        const reqBody = await request.json()
        const {hallTicket, password} = reqBody
        const user = await UserModel.findOne({hallTicket})
        if (!user) {
            return NextResponse.json({error: "User not found"}, {status: 400})
        } else {
            if (user.password === reqBody.password) {
                const token = sign(
                    {user},
                    SECRET_KEY,
                    {expiresIn: 60 * 24 * 30}
                )

                const serialised = serialize("token", token, {
                    httpOnly: true, sameSite: "strict", maxAge: 60 * 24 * 30, path: "/"
                })

                return new Response(JSON.stringify(user), {status: 200, headers: {"Set-Cookie": serialised}})
            } else {
                return NextResponse.json({error: "The password is wrong"}, {status: 400})
            }
        }
    } catch (err) {
        return NextResponse.json({error: err.message}, {status: 500})
    }
}