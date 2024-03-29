// NEXT AUTH
import NextAuth from 'next-auth'

// PROVIDERS
import CredentialsProvider from 'next-auth/providers/credentials'

import { loginService } from '@/services/login'

const handler = NextAuth({
  pages: {
    signIn: '/en/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null

        const response = await loginService(credentials)

        if (response.status.code === 200 && response.data) {
          console.log('Success')

          return response.data
        }

        return null
      },
    }),
  ],
})

export { handler as GET, handler as POST }
