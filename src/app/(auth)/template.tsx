'use client'

// COMPONENTS
import ToggleTheme from '@/components/ToggleTheme'

// STYLES
import styles from './template.module.scss'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.authWrapper}>
      <section className={styles.page}>
        <section className={styles.about}>Infos</section>

        <section className={styles.formWrapper}>
          <header>
            <div>Logo Here</div>

            <ToggleTheme />
          </header>

          {children}

          <footer>
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

export default AuthLayout
