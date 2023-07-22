import connectDB from "@/lib/mongoDatabase";
import {NextResponse} from "next/server";
import UserModel from "models/UserModel"

connectDB()

export async function GET() {
    process.on('uncaughtException', function (err) {
        console.log(err);
    });

    try {
        const users = await UserModel.find({isAdmin: false})
        console.log(users.data)
        return NextResponse.json(users)
    } catch (e) {
        return NextResponse.json({error: e.message}, {status: 500})
    }
}