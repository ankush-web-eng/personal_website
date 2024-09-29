
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export const config = {
    matcher: ['/addmylink', '/addmyblog', '/addmyghost', '/addmyproject', '/addmyskill', '/addmywork', '/addmyapplication'],
};

export default async function middleware(request: NextRequest) {

    const token = await getToken({ req: request })

    if (token?.email === "deshwalankush23@gmail.com") {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/', request.url))

}