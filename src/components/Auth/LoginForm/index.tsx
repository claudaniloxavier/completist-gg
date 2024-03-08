'use client'

import { useState, useCallback } from 'react'

// I18N
import { useTranslations } from 'next-intl'

// UTILS
import { signIn } from 'next-auth/react'

// COMPONENTS
import { TextField, Button, IconButton } from 'orion-kit'
import Icon from '@/components/Icon'

// HOOKS
import useForm from '@/hooks/useForm'

// STYLES
import styles from './styles.module.scss'
import { useSearchParams } from 'next/navigation'

const LOGIN_INITIAL_VALUES = {
  username: '',
  password: '',
}

type LoginTypes = {
  username: string
  password: string
}

const LoginForm = () => {
  const t = useTranslations('Login')

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const { state, setValues } = useForm<LoginTypes>(LOGIN_INITIAL_VALUES)

  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  const handleLogin = () => {
    signIn('credentials', {
      ...state.values,
      callbackUrl: '/',
    })
  }

  const togglePasswordVisibility = useCallback((): void => {
    setShowPassword((prevState) => !prevState)
  }, [])

  const { username, password } = state.values

  return (
    <form className={styles.form}>
      <fieldset>
        <TextField
          label={t('form.username')}
          name="username"
          value={username}
          block
          onChange={(e) => setValues({ username: e.target.value })}
        />

        <TextField
          label={t('form.password')}
          name="passwordss"
          value={password}
          block
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => setValues({ password: e.target.value })}
        />
        <IconButton
          size="small"
          variant="default"
          shape="clear"
          type="button"
          onClick={togglePasswordVisibility}
        >
          <Icon variation={showPassword ? 'visibility-on' : 'visibility-off'} />
        </IconButton>
      </fieldset>

      <Button type="button" onClick={handleLogin}>
        {t('form.login_button')}
      </Button>

      {error === 'CredentialsSignin' && <p>Erro no login</p>}
    </form>
  )
}

export default LoginForm
