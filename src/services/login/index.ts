import api from '../api/api'

type LoginTypes = {
  username: string
  password: string
}

export const login = async (params: LoginTypes) => {
  const { data } = await api.get('/login', {
    data: {
      user: params,
    },
  })

  return data
}
