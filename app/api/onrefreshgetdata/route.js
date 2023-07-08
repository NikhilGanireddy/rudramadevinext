import jwt from "jsonwebtoken";
import {NextRequest, NextResponse} from "next/server";
import UserModel from "models/UserModel"
import connectDB from "@/lib/mongoDatabase";

connectDB()

export async function GET(request) {
    try {
        if (NextRequest.cookies.get("token")) {
            // console.log(request.cookies.get("token"))
            // const SECRET_KEY = "nikhilganireddy25345";
            // const tokendata = request.cookies.get("token")?.value
            // const decodeToken = jwt.verify(tokendata, SECRET_KEY)
            // console.log(decodeToken.name)
            // const userdata = await UserModel.findById(decodeToken._id)
            // console.log(userdata)
            // return NextResponse.json(userdata);

            return NextResponse.json("hi");
        } else return NextResponse.json("hello")

    } catch (e) {
        console.log(e)
    }
}
