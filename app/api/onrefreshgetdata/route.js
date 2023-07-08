import jwt from "jsonwebtoken";
import {NextRequest, NextResponse} from "next/server";
import UserModel from "models/UserModel"
import connectDB from "@/lib/mongoDatabase";
import {cookies} from "next/headers";

connectDB()

export async function GET(request) {
    const SECRET_KEY = "nikhilganireddy25345"
    const cookieStore = cookies()
    const token = cookieStore.get("token")
    // console.log(token.value)
    if (!token) {
        return NextResponse.json("No token found")
    }

    else {
        const tokendata = token.value
        const decodedToken = jwt.verify(tokendata, SECRET_KEY)
        console.log(decodedToken)

        return NextResponse.json(decodedToken)
    }
}


// if (request.cookies.get("token")) {
//     // console.log(request.cookies.get("token"))
//     // const SECRET_KEY = "nikhilganireddy25345";
//     // const tokendata = request.cookies.get("token")?.value
//     // const decodeToken = jwt.verify(tokendata, SECRET_KEY)
//     // console.log(decodeToken.name)
//     // const userdata = await UserModel.findById(decodeToken._id)
//     // console.log(userdata)
//     // return NextResponse.json(userdata);
//
//     return NextResponse.json("hi");
// } else return NextResponse.json(
//     (cookies().get("token"))
// )