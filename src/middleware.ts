import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCurrentUser } from './services/AuthService'

const AuthRoutes = ["/login", "/register"]
type Role = keyof typeof RoleBasedRoutes
const RoleBasedRoutes = {
    user: ["/recipe-details","/login", "/register", "/about"],
    admin: ["/dashboard","/login", "/register"],
    // admin: [/^\/dashboard/]
}
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    console.log(pathname);

    const user = await getCurrentUser();
    console.log('from middleware', user);

    // const user = undefined;
    if (!user) {
        if (AuthRoutes.includes(pathname)) {
            return NextResponse.next()
        } else {
            return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url))
        }
    }

    if (user?.role && RoleBasedRoutes[user?.role as Role]) {
        const routes = RoleBasedRoutes[user?.role as Role];
        console.log(routes);
        if (routes.some((route) => pathname.match(route))) {
            return NextResponse.next()
        }
    }
    return NextResponse.redirect(new URL('/', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/about', '/login', "/register", "/dashboard"],
}
