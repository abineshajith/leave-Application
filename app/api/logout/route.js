import { NextResponse } from 'next/server';

export async function POST(request) {

    const response=  NextResponse.json({ error: null, message: "Logout successful" }, { 
     
     status: 200 })

     response.cookies.delete("token");
     return response; 

}

       
        

        
