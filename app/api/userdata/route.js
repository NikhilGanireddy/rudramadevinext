import jwt from "jsonwebtoken";
import {NextResponse} from "next/server";
import UserModel from "models/UserModel"
export async function GET(request){
    const SECRET_KEY = "nikhilganireddy25345"

    try {
        if (request.cookies.get("token") !== undefined){
            const token = request.cookies.get("token")?.value || ""
            const decodedToken = jwt.verify(token, SECRET_KEY)
            // console.log(decodedToken)
            return NextResponse.json(decodedToken)
        } else return NextResponse.json(null)


    } catch (err){
        console.log(err)
    }
}