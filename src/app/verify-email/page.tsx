"use client"


import { changeUserStatus, deleteToken, getUserByEmail, tokenUser } from "@/utils/api";
import { useSearchParams } from "next/navigation"

export default function VerifyPage () {
    const searchParams = useSearchParams();
   
    
    const handleClick = async()=>{
        const token = searchParams.get("token");
        console.log(token);
        
        if(token){
            const getToken = await tokenUser(token);
            console.log(getToken);
            
            const email = getToken[0].email;
            const tokenId = getToken[0].id

            const user = await getUserByEmail(email);
            const userId = user[0].id;
            
            await changeUserStatus(userId);

            await deleteToken(tokenId);
        }
        
    }
    return(
        <button onClick={handleClick}>Verificar</button>
    )
}