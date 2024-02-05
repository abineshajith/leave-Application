import { connectMongodb } from '../../../lib/config/db';
import User from '../../../lib/model/User.model';
import {NextResponse} from 'next/server';


export async function POST(req) {
    try {
        const { name, email, password,mobile,position,empid,branch} = await req.json();

        await connectMongodb();

        const existingUser = await User.findOne({ email });


        if (existingUser) {
            // A user with the same email already exists
            return NextResponse.json({ message: "User already registered" }, { status: 400 });
        }

        // Create a new user if no existing user found
        await User.create({ name, email, password,mobile,position,empid,branch });

        return NextResponse.json({ message: "User registered" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "An error occurred while registering user" }, { status: 500 });
    }
}