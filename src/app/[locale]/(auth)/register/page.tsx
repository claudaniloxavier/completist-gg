'use client'

// I18N
import { useTranslations } from 'next-intl'

// COMPONENTS
import { Link } from '@/navigation'
import RegisterForm from '@/components/Auth/RegisterForm'

// STYLES
import styles from './page.module.scss'

const Register = () => {
  const t = useTranslations('Register')

  return (
    <section className={styles.register}>
      <h1>{t('title')}</h1>

      <RegisterForm />

      <div className={styles.loginLink}>
        <p>{t('already_a_completist')}</p>

        <Link href="/login">{t('login')}</Link>
      </div>
    </section>
  )
}

export default Register
