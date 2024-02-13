import { Button } from 'orion-kit'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Add a Skeleton here
    return null
  }

  return (
    <Button variant="primary" onClick={handleToggleTheme}>
      Toggle Theme
    </Button>
  )
}

export default ToggleTheme
