'use client'

// UTILS
import { signIn } from 'next-auth/react'

// COMPONENTS
import { TextField, Button } from 'orion-kit'

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
  const { state, setValues } = useForm<LoginTypes>(LOGIN_INITIAL_VALUES)

  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  const handleLogin = () => {
    signIn('credentials', {
      ...state.values,
      callbackUrl: '/',
    })
  }

  return (
    <form className={styles.form}>
      <TextField
        label="Username"
        name="username"
        value={state.values.username}
        onChange={(e) => setValues({ username: e.target.value })}
      />

      <TextField
        label="Password"
        name="password"
        value={state.values.password}
        onChange={(e) => setValues({ password: e.target.value })}
      />

      <Button type="button" onClick={handleLogin}>
        Login
      </Button>

      {error === 'CredentialsSignin' && <p>Erro no login</p>}
    </form>
  )
}

export default LoginForm
