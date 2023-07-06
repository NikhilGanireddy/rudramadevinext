import connectDB from "@/lib/mongoDatabase";
import {NextRequest, NextResponse} from "next/server";
import UserModel from "models/UserModel"
import jwt from "jsonwebtoken"

connectDB()
const SECRET_KEY = "nikhilganireddy25345"

export async function POST(NextRequest) {

    try {
        const reqBody = await NextRequest.json()
        const {name, password} = reqBody
        const user = await UserModel.findOne({name})
        if (!user) {
            return NextResponse.json({error: "User not found"}, {status: 400})
        } else {
            if (user.password === reqBody.password) {
                const tokenData = {
                    id: user._id,
                    name: user.name,
                }

                const token = jwt.sign(tokenData, SECRET_KEY, {expiresIn: "1d"})

                const response = NextResponse.json({message: "Login succesful", success: true})
                response.cookies.set("token", token, {httpOnly: true})
                return response
            } else {
                return NextResponse.json({error: "The password is wrong"}, {status: 400})
            }
        }
    } catch (err) {
        return NextResponse.json({error: err.message}, {status: 500})
    }
}