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

export const tokenUser = async (token: string) => {
    const response = await fetch(`http://localhost:8000/verificationToken?token=${token}`);
    const data = response.json();

    return data
}

export const getUserByEmail = async (email: string) => {
    const response = await fetch(`http://localhost:8000/users?email=${email}`);
    const data = response.json();

    return data
}

export const changeUserStatus = async (id: string) => {
    const updateStatus = {
        emailVerified: "true"
    };

    const response = await fetch(`http://localhost:8000/users/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(updateStatus)
    })

    const data = await response.json();
}

export const deleteToken = async (id: string) => {
    const response = await fetch(`http://localhost:8000/verificationToken/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'Application/json'
        },
    })
}