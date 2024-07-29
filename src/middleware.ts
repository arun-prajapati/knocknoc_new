import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const authRoutes = ['/login', '/register', '/otp']
const without_Login_Block_Routes = [
    "/profile",
    "/profile/favourites",
    "/profile/addresses",
    "/profile/wallet",
    "/profile/favourites",
    "/profile/vouchers",
    "/profile/referrals",
    "/orders",
]

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // --
    const { pathname } = request.nextUrl
    // --
    const cookieData = cookies().get("knocknoc_user")?.value;

    // --
    const loginUser = cookieData ? cookieData : null

    // --redirect user--
    if (loginUser && authRoutes.includes(pathname)) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    // --redirect user--
    if (!loginUser && without_Login_Block_Routes.includes(pathname)) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    // --next--
    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/login', '/register', '/otp', "/profile/:path*", "/orders/:path*"],
}
