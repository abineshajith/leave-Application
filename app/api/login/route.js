import { connectMongodb } from '../../../lib/config/db';
import User from '../../../lib/model/User.model';
import { NextResponse } from 'next/server';
import { GenerateToken } from '../../../lib/services/Token.service';

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        await connectMongodb();

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            // User with the provided email does not exist
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        const isMatch = await existingUser.confirmPassword(password);

        if (!isMatch) {
            // Invalid credentials (password does not match)
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }

        const token = await GenerateToken(existingUser);
            
        const response = NextResponse.json({ message: "Login successfuly" }, { status: 201 });

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: true,
        });

        return response;
    } catch (error) {
        console.error("Error during user registration:", error);

        return NextResponse.json({ message: "An error occurred while registering user" }, { status: 500 });
    }
}