"use client"
import {useParams} from "next/navigation";

const UserEdit = () => {
    const params= useParams()
    // console.log(params)
    const presentUserId = params.id
    console.log(presentUserId)
    return <div>{presentUserId}</div>
}

export default UserEdit