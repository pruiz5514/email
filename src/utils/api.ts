import { IRegisterUser } from "@/types/IRegisterUser";
import { IToken } from "@/types/IToken";
import { use } from "react";

export const createUser = async (user: IRegisterUser) => {
    const response = await fetch(`http://localhost:8000/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user)
    })

    const data = response.json();
    return data;
}

export const postToken = async (token: IToken) => {
    const response = await fetch(`http://localhost:8000/verificationToken`, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(token)
    })

    const data = response.json();
    return data;
}


export const getVerificationTokenByEmail = async (email: string) => {
    const response = await fetch(`http://localhost:8000/users?email=${email}`);
    const data = response.json();

    return data
}