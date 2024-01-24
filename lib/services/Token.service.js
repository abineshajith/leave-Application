import jwt from 'jsonwebtoken'

const Auth = process.env.AUTH_JWT || 'FGHT'

const FORGET_JWT = process.env.AUTH_JWT || 'FGHT'

export const GenerateToken = async(user)=>{
    const token = await jwt.sign({userId:user._id}, Auth, {expiresIn: '2d'})

    return token
}

export const VerifyToken = async (token) => {
    try {
        const verified = await jwt.verify(token, Auth);
        return verified;
    } catch (error) {
        console.error("Error verifying token:", error);
        return null; // or handle the error appropriately
    }
};