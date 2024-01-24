import { NextResponse } from 'next/server';

export default middleware = (request)=>{

const pathVariable = request.nextUrl.pathname; 

const publicPaths = ['/update-profile','/forgot-password', '/login'];

const auth = request.cookies.get('token') || "";

if(publicPaths.includes(pathVariable) && auth){
    return NextResponse.redirect(new URL('/', request.url));
}

if(!publicPaths.includes(pathVariable) && !auth){
    return NextResponse.redirect(new URL('/login', request.url));
} 

}



export const config = {
    matcher: [
        // '/',
        '/update-profile',
        '/forgot-password',
        '/update-password',
        // '/register',
        // '/login'

    ]
}