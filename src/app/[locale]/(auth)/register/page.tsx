'use client'

// COMPONENTS
import { Link } from '@/navigation'
import RegisterForm from '@/components/Auth/RegisterForm'

// STYLES
import styles from './page.module.scss'

const Register = () => {
  return (
    <section className={styles.register}>
      <h1>REGISTER</h1>

      <RegisterForm />

      <div className={styles.loginLink}>
        <p>Already is a Completist?</p>

        <Link href="/login">Login</Link>
      </div>
    </section>
  )
}

export default Register
