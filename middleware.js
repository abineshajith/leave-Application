import { NextResponse } from 'next/server';

// Use `middleware` without `const`
export default middleware = (request) => {
  const pathVariable = request.nextUrl.pathname;

  const publicPaths = [
    "/register",
    '/forgot-password',
    '/update-password',
    '/login'
  ];

  const auth = request.cookies.get('token') || "";

  if (publicPaths.includes(pathVariable) && auth) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!publicPaths.includes(pathVariable) && !auth) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
};

// Use `matcher` as an array of strings
export const config = {
  matcher: [
    '/update-profile',
    '/forgot-password',
    '/update-password',
    '/register',
    '/login',
    "/profile"
  ]
};