// NEXT AUTH
import NextAuth from 'next-auth'

// PROVIDERS
import CredentialsProvider from 'next-auth/providers/credentials'

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

        if (
          credentials.username === 'claudanilo' &&
          credentials.password === '123'
        ) {
          return {
            id: '1',
            name: 'claudanilo',
            email: 'claudaniloxavier@gmail.com',
          }
        }

        // const res = await fetch('/your/endpoint', {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { 'Content-Type': 'application/json' },
        // })
        // const user = await res.json()

        // if (res.ok && user) {
        //   return user
        // }

        return null
      },
    }),
  ],
})

export { handler as GET, handler as POST }
