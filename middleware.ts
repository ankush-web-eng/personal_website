
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export const config = {
    matcher: ['/addmylink', '/addmyblog', '/addmyghost', '/addmyproject'],
};

export default async function middleware(request: NextRequest) {

    const token = await getToken({ req: request })
    
    if (token?.email === process.env.ADMIN_EMAIL) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/', request.url))

}