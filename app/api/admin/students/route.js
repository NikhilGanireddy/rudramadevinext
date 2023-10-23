import connectDB from "@/lib/mongoDatabase";
import {NextResponse} from "next/server";
import UserModel from "models/UserModel"
import next from "next";

connectDB().then(r => console.log("students database connected"))

export async function GET() {
    try {
        const users = await UserModel.find({isAdmin: false})
        // console.log(users)
        return new NextResponse(JSON.parse(users))
    } catch (e) {
        return NextResponse.json({error: e.message}, {status: 500})
    }
}

export async function getUsersFromRoute() {
    try {
        const users = await UserModel.find({isAdmin: false})
        // console.log(users)
        return (users)
    } catch (e) {
        console.log(e)
    }
}