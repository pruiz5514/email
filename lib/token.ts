import { getVerificationTokenByEmail } from '@/utils/api';
import { v4 as uuidv4 } from 'uuid'

export const generateVerificationToken = async (email: string) => {
    // generate a random token
    const token = uuidv4();
    const expires = new Date().getTime() + 1000 * 60 * 60 * 24 // 24 hours

    //check if token already exist for the user
    // const existingToken = await getVerificationTokenByEmail(email);

    // if (existingToken) {
    //     alert("ya existe el token")
    // }

    const data = {
        email: email,
        token: token,
        expires: expires
    }

    return data;
}