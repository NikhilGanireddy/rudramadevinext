import jwt from "jsonwebtoken";
import {cookies} from "next/headers";
import {NextResponse} from "next/server";
import UserModel from "models/UserModel"
import connectDB from "@/lib/mongoDatabase";

connectDB()

export async function GET(request) {
    const SECRET_KEY = "nikhilganireddy25345";
    const tokendata = request.cookies.get("token")?.value
    const decodeToken = jwt.verify(tokendata, SECRET_KEY)
    // console.log(decodeToken.name)
    const userdata = await UserModel.findById( decodeToken._id)
    // console.log(userdata)
    return NextResponse.json(userdata);
}
