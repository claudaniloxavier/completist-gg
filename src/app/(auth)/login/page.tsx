'use client'

// COMPONENTS
import LoginForm from '@/components/loginForm'

import styles from './page.module.scss'

const Login = () => {
  return (
    <section className={styles.page}>
      <h1>LOGIN</h1>
      <LoginForm />
    </section>
  )
}

export default Login
