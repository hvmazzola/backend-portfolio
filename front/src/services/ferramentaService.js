import api from './api'

const findAllFerramentas = () => {
  return api.get('/ferramenta/findAll')
  .then((response) => response)
  .catch(err => err)
}

export default findAllFerramentas