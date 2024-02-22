import api from '../api/api'

type LoginTypes = {
  username: string
  password: string
}

export const login = async (params: LoginTypes) => {
  const { data, headers } = await api.post('/login', {
    user: params,
  })

  console.log('headers', headers)

  // return header maybe?

  return data
}
