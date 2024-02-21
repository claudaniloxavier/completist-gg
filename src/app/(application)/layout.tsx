import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <div>
      <p>Olá, {session?.user?.name}</p>
      <div>{children}</div>
    </div>
  )
}

export default HomeLayout
