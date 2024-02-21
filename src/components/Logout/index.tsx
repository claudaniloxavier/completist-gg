'use client'

import { Button } from 'orion-kit'

import { signOut } from 'next-auth/react'

const Logout = () => {
  const handleLogout = () => {
    console.log('clicou')
    signOut()
  }
  // handle this signOut in api too
  return <Button onClick={(): void => handleLogout()}>Logout</Button>
}

export default Logout
