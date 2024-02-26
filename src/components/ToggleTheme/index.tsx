import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import Shimmer from '@/components/Shimmer'

import styles from './styles.module.scss'

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
    return <Shimmer type="pill" width={60} height={34} />
  }

  return (
    <label className={styles.toggleWrapper}>
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={handleToggleTheme}
      />
      <div className={styles.slider}>
        <Icon variation="moon" height={20} width={20} />
        <Icon variation="sun" height={20} width={20} />
      </div>
    </label>
  )
}

export default ToggleTheme
