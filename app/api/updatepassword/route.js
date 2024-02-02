import { connectMongodb } from '../../../lib/config/db';
import User from '../../../lib/model/User.model';
import { NextResponse } from 'next/server';
import { VerifyForgotToken } from '../../../lib/services/Token.service';
import bcrypt from 'bcryptjs';

// Connect to MongoDB when the server starts
await connectMongodb();

// Update user password - PUT method
export const PUT = async (request) => {
  try {
    // Extract user data from the request body
    const { email, password, token, Cpassword } = await request.json();

    if (Cpassword !== password) {
      return NextResponse.json({ message: 'Password and Cpassword do not match' }, { status: 400 });
    }

    // Get the authentication token from the 'token' cookie
    const auth = token || '';

    // Check if the user is authenticated
    if (!auth) {
      return NextResponse.json({ message: 'Please login first' }, { status: 400 });
    }

    // Verify the authentication token
    const tokenData = await VerifyForgotToken(auth, email);

    // Check if the token is valid and contains user information
    if (!tokenData || !tokenData.userId) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 400 });
    }

    // Extract userId from the token
    const { userId } = tokenData;

    // Update user information in the database
    const existingUser = await User.findById(userId);

    // Check if the user exists in the database
    if (!existingUser) {
      return NextResponse.json({ message: 'User does not exist' }, { status: 404 });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    // Update user password
    await User.findByIdAndUpdate(userId, {
      $set: {
        password: hashPassword
      }
    });

    // Return success response with updated user information
    return NextResponse.json({ error: null, message: 'Password updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    // Return internal server error in case of exceptions
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
};