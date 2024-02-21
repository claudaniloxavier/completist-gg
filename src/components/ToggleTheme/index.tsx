import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import styles from './toggle.module.scss'

import Icon from '../Icon'

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
    <label className={styles.toggleWrapper}>
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={handleToggleTheme}
      />
      <span className={styles.slider} />

      <Icon variation="sun" />
      <Icon variation="moon" />
    </label>
  )
}

export default ToggleTheme
