export const getVerificationTokenByEmail = async (email: string) => {
    const response = await fetch(`http://localhost:8000/users?email=${email}`);
    const data = response.json();

    return data
}