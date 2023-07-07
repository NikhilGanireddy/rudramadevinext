import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import {NextResponse} from "next/server";

export async function GET(request) {
  const SECRET_KEY = "nikhilganireddy25345";
  return NextResponse.json(request.cookies.get("token")?.value);
}
