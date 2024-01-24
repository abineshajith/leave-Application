import { connectMongodb } from '../../../lib/config/db';
import User from '../../../lib/model/User.model';
import {NextResponse} from 'next/server';
import {VerifyToken} from '../../../lib/services/Token.service'



await connectMongodb();
export async function GET(request) {
    try {
        const auth = request.cookies.get('token') || " ";

        if (!auth) {
            return NextResponse.json({ message: "please login first" }, { status: 400 });
        }

        const { userId } = await VerifyToken(auth.value);

        if (!userId) {
          
            return NextResponse.json({ message: "Invalid token" }, { status: 400 });
        }

      
        const existingUser = await User.findById(userId).select('-password');

    

        if (!existingUser) {
     
            return NextResponse.json({ message: "User does not exist" }, { status: 400 });
        }

   
        return NextResponse.json({ error: null, message: "Data fetched", user: existingUser }, { status: 201 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
