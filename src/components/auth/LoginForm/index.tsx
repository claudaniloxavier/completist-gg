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

  const { username, password } = state.values

  return (
    <form className={styles.form}>
      <fieldset>
        <TextField
          label="Username"
          name="username"
          value={username}
          block
          onChange={(e) => setValues({ username: e.target.value })}
        />

        <TextField
          label="Password"
          name="password"
          value={password}
          block
          onChange={(e) => setValues({ password: e.target.value })}
        />
      </fieldset>

      <Button type="button" onClick={handleLogin}>
        Login
      </Button>

      {error === 'CredentialsSignin' && <p>Erro no login</p>}
    </form>
  )
}

export default LoginForm
