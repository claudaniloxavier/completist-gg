'use client'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'

const Auth = () => {
  // ADJUST THIS TO MAKE LOGIN BE THE DEFAULT
  useEffect(() => {
    redirect('/en/login')
  }, [])

  return null
}

export default Auth
