import React, { useEffect, useState } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { useNavigate, Link } from 'react-router-dom'
import { deleteProjectById, findAllProjects } from '../../services/projectService'

const Admin = () => {

  const [projects, setProjects] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getAllProjects()
  }, [])

  const getAllProjects = async () => {
    const response = await findAllProjects()
    setProjects(response.data)
  }

  const removeProject = async (id) => {
    const answer = window.confirm(`Deseja excluir o projeto?`)
    if(answer) {
      await deleteProjectById(id)
      alert(`Projeto removido com sucesso!`)
      getAllProjects()
    }    
  }

  return (
    <section className='my-12 max-w-screen-xl mx-auto px-6'>
      <div className='flex justify-end space-y-2'>
        <button onClick={() => navigate('/admin/add-project')} className='w-34 px-2 py-3 bg-primary text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300'>
          Adicionar Projeto
        </button>
      </div>
      <div className='flex flex-col my-8'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-hidden sm:rounded-lg shadow-md'>
              <table className='min-w-full'>
                <thead className='bg-primary'>
                  <tr>
                    <th scope='col' className='text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider'>
                      Imagem
                    </th>
                    <th scope='col' className='text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider'>
                      Linguagem
                    </th>
                    <th scope='col' className='text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider'>
                      Nome
                    </th>
                    <th scope='col' className='text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider'>
                      Descrição
                    </th>
                    <th scope='col' className='text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider'>
                      Ferramentas
                    </th>
                    <th scope='col' className='relative px-6 py-3'>
                      <span className='text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider'>Ações</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map(project => (
                    <tr key={project._id} className='bg-white border-b'>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                        <img src={project.imagem} alt={project} className='w-16'/>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                        {project.linguagem}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                        {project.nome}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                        {project.descricao}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                        {project.ferramentas.map(ferramenta => {
                          return (ferramenta.nome + ', ')
                        })}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center'>
                        <div className='flex items-center justify-center space-x-3'>
                          <Link to={`/admin/edit-project/${project._id}`}>
                            <AiFillEdit className='cursor-pointer text-2xl text-blue-600'/>
                          </Link>
                          <AiFillDelete onClick={() => removeProject(project._id)} className='cursor-pointer text-2xl text-red-600'/>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Admin