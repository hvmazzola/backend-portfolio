import React, { useEffect, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { findProjectById } from '../../services/projectService'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState({})

  const getProjectById = async () => {
    const response = await findProjectById(id)
    setProject(response.data)
  }

  useEffect(() => {
    getProjectById()
  }, [])

  return (
    <main className='max-w-screen-xl mx-auto px-6 my-3'>
      <div className='flex flex-col justify-start items-center h-screen'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
          <div className='order-2 md:order-1 lg:order-1 flex flex-col justify-center'>
            <h1 className='text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-700 select-none'>
              {project.nome}
            </h1>
            <p className='text-center md:text-left lg:text-left text-sm lg:text-4xl poppins text-gray-500 leading-relaxed select-none'>
              {project.descricao}
            </p>
            <div className='flex items-center justify-center md:justify-start lg:justify-start space-x-6 pt-8'>
              <h2 className='text-3xl font-bold text-black poppind select-none'>
                {project.linguagem}
              </h2>
            </div>
            <div className='mt-8 flex items-center justify-center md:justify-start lg:justify-start space-x-2'>
              <button className='bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105'>
                <Link to='https://github.com/hvmazzola' className='flex items-center space-x-3 '>
                  <AiFillGithub className='mr-2 text-2xl'/>
                  GitHub
                </Link>
              </button>
              <button className='bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105'>
                <Link to='/' className='flex items-center space-x-3 '>
                  Home
                </Link>
              </button>
            </div>
          </div>
          <div className='order-1 md:order-2 lg:order-2'>
              <img src={project.imagem} alt="" className='w-3/4 md:w-3/4 lg:w-full mx-auto'/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectDetail