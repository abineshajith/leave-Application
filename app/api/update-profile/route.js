import { connectMongodb } from '../../../lib/config/db';
import User from '../../../lib/model/User.model';
import { NextResponse } from 'next/server';
import { VerifyToken } from '../../../lib/services/Token.service';

// Connect to MongoDB when the server starts
await connectMongodb();

// Update user profile - PUT method
export const PUT = async (request) => {
  try {
    // Extract user data from the request body
    const { name, email, mobile, position,empid,branch } =await request.json();

    // Get the authentication token from the 'token' cookie
    const auth = request.cookies.get('token') || '';

    // Check if the user is authenticated
    if (!auth) {
      return NextResponse.json({ message: 'Please login first' }, { status: 400 });
    }

    // Verify the authentication token
    const tokenData = await VerifyToken(auth.value);

    // Check if the token is valid and contains user information
    if (!tokenData || !tokenData.userId) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 400 });
    }

    // Extract userId from the token
    const { userId } = tokenData;

    // Update user information in the database
    const updatedUser = await User.findByIdAndUpdate(userId, {
      $set: { name, email, mobile, position,empid,branch }
    }, { new: true });

    // Check if the user exists in the database
    if (!updatedUser) {
      return NextResponse.json({ message: 'User does not exist' }, { status: 404 });
    }

    // Return success response with updated user information
    return NextResponse.json({ error: null, message: 'Profile updated', user: updatedUser }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    // Return internal server error in case of exceptions
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
};
