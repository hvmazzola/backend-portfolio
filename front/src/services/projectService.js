import api from "./api";

const addProjectApi = ( project ) => {
  return api.post('/project/create', project)
  .then((response) => response)
  .catch((err) => console.log(err.response.data))
}

const findAllProjects = () => {
  return api.get('/project/findAll')
  .then((response) => response)
  .catch((err) => console.log(err.response.data))
}

const findProjectById = (id) => {
  return api.get(`/project/findById/${id}`)
  .then((response) => response)
  .catch((err) => err)
}

const updateProjectById = (id, product) => {
  return api.put(`/project/update/${id}`, product)
  .then((response) => response)
  .catch((err) => err)
}

const deleteProjectById = (id) => {
  return api.delete(`/project/remove/${id}`)
  .then((response) => response)
  .catch((err) => err)
}

export { addProjectApi, findAllProjects, findProjectById, updateProjectById, deleteProjectById }