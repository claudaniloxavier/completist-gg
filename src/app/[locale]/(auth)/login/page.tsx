'use client'

// I18N
import { useTranslations } from 'next-intl'

// COMPONENTS
import { Link } from '@/navigation'
import LoginForm from '@/components/Auth/LoginForm'

// STYLES
import styles from './page.module.scss'

const Login = () => {
  const t = useTranslations('Login')

  return (
    <section className={styles.login}>
      <h1>{t('title')}</h1>

      <LoginForm />

      <div className={styles.registerLink}>
        <p>{t('new_at_completist')}</p>

        <Link href="/register">{t('create_account')}</Link>
      </div>
    </section>
  )
}

export default Login
