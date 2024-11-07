import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCurrentUser } from './services/AuthService'

const AuthRoutes = ["/login", "/register"]
const UserProtectRoutes = ['/user-dashboard']
const CommonProtectRoutes = [ '/about', '/contact-us']
const AdminProtectRoutes = ['/admin-dashboard']
// type Role = keyof typeof RoleBasedRoutes
// const RoleBasedRoutes = {
//     // user: ['/about','/contact-us'],
//     admin: [\/^\admin-dashboard/path/],

// }

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    console.log(pathname);

    const user = await getCurrentUser();
    console.log('from middleware', 'main role', user?.role);

    if (!user) {
        if (UserProtectRoutes.some(route => pathname.startsWith(route)) || AdminProtectRoutes.some(route => pathname.startsWith(route)) ||  CommonProtectRoutes.some(route => pathname.startsWith(route))) {
            return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url))
        }
            if (AuthRoutes.includes(pathname)) {
                return NextResponse.next()
            }
        
    }

    if(user?.role === 'admin' &&  AdminProtectRoutes.some(route => pathname.startsWith(route)) || CommonProtectRoutes.some(route => pathname.startsWith(route))){
        return NextResponse.next()
    }
    if(user?.role === 'user' &&  UserProtectRoutes.some(route => pathname.startsWith(route))){
        return NextResponse.next()
    }
    if(user &&  AdminProtectRoutes.some(route => pathname.startsWith(route) && user?.role !== 'admin')){
        return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url))
    }
    
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ["/login", "/register",'/about', '/contact-us', '/admin-dashboard/:path*', '/user-dashboard/:path*'],
}
