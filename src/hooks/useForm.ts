import { useReducer } from 'react'

type FormState<T> = {
  values: T
  errors: { [K in keyof T]?: string }
}

type FormAction<T> =
  | { type: 'SET_VALUES'; payload: Partial<T> }
  | { type: 'SET_ERRORS'; payload: { [K in keyof T]?: string } }

type UseForm<T> = {
  state: FormState<T>
  setValues: (values: Partial<T>) => void
  setErrors: (errors: { [K in keyof T]?: string }) => void
}

function useForm<T>(initialValues: T): UseForm<T> {
  const [state, dispatch] = useReducer(
    (prevState: FormState<T>, action: FormAction<T>): FormState<T> => {
      switch (action.type) {
        case 'SET_VALUES':
          return {
            ...prevState,
            values: { ...prevState.values, ...action.payload },
          }
        case 'SET_ERRORS':
          return {
            ...prevState,
            errors: { ...prevState.errors, ...action.payload },
          }
        default:
          return prevState
      }
    },
    { values: initialValues, errors: {} },
  )

  const setValues = (values: Partial<T>): void => {
    dispatch({ type: 'SET_VALUES', payload: values })
  }

  const setErrors = (errors: { [K in keyof T]?: string }): void => {
    dispatch({ type: 'SET_ERRORS', payload: errors })
  }

  return { state, setValues, setErrors }
}

export default useForm
