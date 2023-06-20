import api from './api'

const loginApi = ( credentials ) => {
  return api.post('/auth/login', credentials)
  .then((response) => response)
  .catch((err) => console.error('Erro: ', err))
}

const registerApi = ( userValues ) => {
  return api.post('/usuario/create', userValues)
  .then((response) => response)
  .catch((err) => console.error('Erro: ', err))
}

const getUserById = ( idUser ) => {
  return api.get(`/usuario/findById/${idUser}`)
  .then((response) => response)
  .catch((err) => console.log(err.response.data))
}

export { loginApi, registerApi, getUserById }