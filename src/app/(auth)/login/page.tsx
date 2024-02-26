'use client'

// COMPONENTS
import LoginForm from '@/components/loginForm'
import ToggleTheme from '@/components/ToggleTheme'

// STYLES
import styles from './page.module.scss'

const Login = () => {
  return (
    <main className={styles.pageWrapper}>
      <section className={styles.content}>
        <section className={styles.about}>
          <h1>LOGIN</h1>
          <ToggleTheme />
        </section>

        <section className={styles.loginWrapper}>
          <header className={styles.header}>LOGO HERE</header>

          <section className={styles.login}>
            <h1>Login</h1>
            <LoginForm />
          </section>

          <footer className={styles.footer}>
            Made with ❤️ by
            <a href="https://www.linkedin.com/in/claudaniloxavier/">
              Claudanilo Xavier
            </a>
          </footer>
        </section>
      </section>
    </main>
  )
}

export default Login
