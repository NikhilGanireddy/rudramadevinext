import connectDB from "@/lib/mongoDatabase";
import UserModel from "@/models/UserModel";
import {NextResponse} from "next/server";

connectDB()

export async function POST(request) {

    try {
        const {
            name, hallTicket, room, year, branch, mobile, motherMobile, motherName, fatherMobile, fatherName
        } = await request.json()
        await UserModel.create({
            name,
            hallTicket,
            room,
            year,
            branch,
            mobile,
            motherMobile,
            motherName,
            fatherMobile,
            fatherName
        })
        return NextResponse.json("Student created successfully")
    } catch (e) {
        return NextResponse.json({error: e.message}, {status: 500})
    }
}
