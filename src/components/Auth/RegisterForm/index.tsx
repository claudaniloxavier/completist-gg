'use client'

// I18N
import { useTranslations } from 'next-intl'

// COMPONENTS
import { TextField, Button } from 'orion-kit'

// HOOKS
import useForm from '@/hooks/useForm'

// STYLES
import styles from './styles.module.scss'

const REGISTER_INITIAL_VALUES = {
  name: '',
  username: '',
  email: '',
  password: '',
}

type RegisterTypes = {
  name: string
  username: string
  email: string
  password: string
}

const RegisterForm = () => {
  const t = useTranslations('Register')

  const { state, setValues } = useForm<RegisterTypes>(REGISTER_INITIAL_VALUES)

  const handleRegister = () => {
    console.log(state.values)
  }

  const { name, username, email, password } = state.values

  return (
    <form className={styles.form}>
      <fieldset>
        <TextField
          label={t('form.name')}
          name="name"
          value={name}
          block
          onChange={(e) => setValues({ name: e.target.value })}
        />

        <TextField
          label={t('form.username')}
          name="username"
          value={username}
          block
          onChange={(e) => setValues({ username: e.target.value })}
        />
        <TextField
          label={t('form.email')}
          name="email"
          value={email}
          block
          onChange={(e) => setValues({ email: e.target.value })}
        />

        <TextField
          label={t('form.password')}
          name="password"
          value={password}
          block
          onChange={(e) => setValues({ password: e.target.value })}
        />
      </fieldset>

      <Button type="button" onClick={handleRegister}>
        {t('form.register_button')}
      </Button>
    </form>
  )
}

export default RegisterForm
