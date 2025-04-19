// utils/setAuthCookie.ts
import { getAuth } from 'firebase/auth'
import { setCookie } from 'cookies-next'

export async function setAuthCookie() {
  const auth = getAuth()
  const user = auth.currentUser

  if (user) {
    const token = await user.getIdToken()
    setCookie('token', token, {
      maxAge: 60 * 60 * 24 * 5, // 5 days
      path: '/',
    })
  }
}
