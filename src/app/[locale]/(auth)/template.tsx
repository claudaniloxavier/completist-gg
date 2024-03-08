'use client'

// I18N
import { useTranslations } from 'next-intl'

// COMPONENTS
import ToggleTheme from '@/components/ToggleTheme'
import LanguageSwitcher from '@/components/LanguageSwitcher'

// STYLES
import styles from './template.module.scss'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations('Auth')

  return (
    <main className={styles.authWrapper}>
      <section className={styles.page}>
        <section className={styles.about}>Infos</section>

        <section className={styles.formWrapper}>
          <header>
            <div>Logo Here</div>

            <div className={styles.actions}>
              <LanguageSwitcher />
              <ToggleTheme />
            </div>
          </header>

          {children}

          <footer>
            {t.rich('made_with', {
              link: (chunks) => (
                <a href="https://www.linkedin.com/in/claudaniloxavier/">
                  {chunks}
                </a>
              ),
            })}
          </footer>
        </section>
      </section>
    </main>
  )
}

export default AuthLayout
