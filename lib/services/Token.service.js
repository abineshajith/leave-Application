import jwt from 'jsonwebtoken';

const Auth = process.env.AUTH_JWT || 'FGHT';  // Use a default value if AUTH_JWT is not provided
const FORGET_JWT = process.env.FORGET_JWT || 'FGHT';  // Use a default value if FORGET_JWT is not provided

export const GenerateToken = async (user) => {
    const token = await jwt.sign({ userId: user._id }, Auth, { expiresIn: '2d' });
    return token;
};

export const VerifyToken = async (token) => {
    try {
        if (!token) {
            console.error("No token provided");
            return null;
        }

        const verified = await jwt.verify(token, Auth);
        return verified;
    } catch (error) {
        console.error("Error verifying token:", error);
        return null; // or handle the error appropriately
    }
};