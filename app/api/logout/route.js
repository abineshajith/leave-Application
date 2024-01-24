
import {NextResponse,NextRequest} from 'next/server';





export async function POST(request) {
    
       request.cookies.delete('token') 
            return NextResponse.json({error:null, message: "logout successful" }, { status: 200 });
}