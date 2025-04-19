import { adminAuth } from '@/app/firebase/firebaseAdmin'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { token } = await req.json()

  try {
    const decoded = await adminAuth.verifyIdToken(token)
    return NextResponse.json({ uid: decoded.uid })
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }
}