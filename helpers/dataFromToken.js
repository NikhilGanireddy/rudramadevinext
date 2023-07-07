import jwt from "jsonwebtoken"
import {cookies} from "next/headers";

const SECRET_KEY = "nikhilganireddy25345"
export const getDataFromToken=(request)=>{
    try {
        const token = request.cookies.get("token")?.value ||""

        const decodedToken = jwt.verify(token, SECRET_KEY)
         return decodedToken

    } catch (err){
        console.log(err)
    }
}
