import {cookies} from 'next/headers'
import {NextResponse} from "next/server";


export async function GET(request) {

    const token = cookies().set({
        name: 'token',
        value: '',
        expires: 0,
        path: '/',
    })

    return NextResponse.json("Logout Successful")
}