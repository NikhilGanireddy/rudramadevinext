import connectDB from "@/lib/mongoDatabase";
import {NextRequest, NextResponse} from "next/server";
import UserModel from "models/UserModel"
import jwt, {sign} from "jsonwebtoken"
import {serialize} from "cookie";
import {headers} from "next/headers";

connectDB()

export async function POST(request) {
    const SECRET_KEY = "nikhilganireddy25345"
    try {
        const reqBody = await request.json()
        const {name, password} = reqBody
        const user = await UserModel.findOne({name})
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
                // const tokenData = user
                // // console.log(tokenData)
                // const token = jwt.sign(tokenData.toObject(), SECRET_KEY, {expiresIn: "1d"})
                // const response = NextResponse.json({message: "Login successful", success: true, user})
                // response.cookies.set("token", token, {httpOnly: true})
                // return response
            } else {
                return NextResponse.json({error: "The password is wrong"}, {status: 400})
            }
        }
    } catch (err) {
        return NextResponse.json({error: err.message}, {status: 500})
    }
}