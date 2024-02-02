import { connectMongodb } from '../../../lib/config/db';
import User from '../../../lib/model/User.model';
import { NextResponse } from 'next/server';
import { GenerateForgotToken } from '../../../lib/services/Token.service';
import { sendEmail } from '../../../lib/services/Mail.service';

export async function POST(req) {
    try {
        const {email} = await req.json();

        await connectMongodb(); // Await the database connection

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        // Check if you have the user's password before attempting the match
        // const isMatch = await existingUser.confirmPassword(password);

        // Assuming you have a function to send a token via email
        const token = await GenerateForgotToken(existingUser, email);
        await sendEmail(existingUser.name,token, email );

        // Respond with success and set the forget-token cookie
        const response = NextResponse.json({ message: 'Email sent successfully' }, { status: 201 });
      
        return response;
    } catch (error) {
        console.error('Error during forgot password request:', error);

        return NextResponse.json({ message: 'An error occurred while processing the request' }, { status: 500 });
    }
}