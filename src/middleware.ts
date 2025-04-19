import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  console.log('🔐 Middleware: token present?', !!token)

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Token exists — allow access (validation happens elsewhere)
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard', '/profile/:path*', '/admin/:path*'], // protected paths
}