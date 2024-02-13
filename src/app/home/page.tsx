'use client'

import ToggleTheme from '@/components/ToggleTheme'

import styles from './home.module.css'

const Home = () => {
  return (
    <div>
      <ToggleTheme />

      <div className={styles.primary}>
        <div>Light</div>
        <div>Default</div>
        <div>Dark</div>
      </div>

      <div className={styles.error}>
        <div>Light</div>
        <div>Default</div>
        <div>Dark</div>
      </div>

      <div className={styles.success}>
        <div>Light</div>
        <div>Default</div>
        <div>Dark</div>
      </div>

      <div className={styles.warning}>
        <div>Light</div>
        <div>Default</div>
        <div>Dark</div>
      </div>
    </div>
  )
}

export default Home
