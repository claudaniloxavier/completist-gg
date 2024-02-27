'use client'

// COMPONENTS
import Link from 'next/link'
import LoginForm from '@/components/auth/LoginForm'

// STYLES
import styles from './page.module.scss'

const Login = () => {
  return (
    <section className={styles.login}>
      <h1>Login</h1>

      <LoginForm />

      <div className={styles.registerLink}>
        <p>New Completist?</p>

        <Link href="/register">Create account</Link>
      </div>
    </section>
  )
}

export default Login
