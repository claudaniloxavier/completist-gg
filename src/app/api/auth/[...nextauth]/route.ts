// NEXT AUTH
import NextAuth from 'next-auth'

// PROVIDERS
import CredentialsProvider from 'next-auth/providers/credentials'

import { login } from '@/services/login'

const handler = NextAuth({
  pages: {
    signIn: '/login',
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

        const response = await login(credentials)

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
