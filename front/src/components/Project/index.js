import React from 'react'
import { useNavigate } from 'react-router-dom'

const Project = ({ project }) => {
  const navigate = useNavigate()

  return (
    <div className='bg-cards border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative'>
        <span className='bg-primary border border-green-300 rounded-full text-gray-100 text-sm px-4 py-1 inline-block self-start mb-4'>{project.linguagem}</span>
        <img className='w-64 mx-auto transform transition duration-300 hover:scale-105' src={project.imagem} alt='Imagem da Linguagem'/>
        <div className='flex flex-col items-center my-3 space-y-2 pb-12'>
            <h1 className='text-white text-2xl font-semibold'>{project.nome}</h1>
            <p className='text-gray-200 text-sm text-center'>{project.descricao}</p>
            <div className='space-x-4 space-y-2'>
              {project.ferramentas.map(ferramenta => (
                <span className='bg-secondary rounded-full text-gray-900 text-primary text-sm px-4 py-1 inline-block'>{ferramenta.nome}</span>
              ))}
            </div>
        </div>
        <button onClick={() => navigate(`/project/${project._id}`)} className='absolute mx-auto w-48 left-0 right-0 bottom-4 bg-primary text-white px-8 py-2 rounded-full transition transform duration-300 hover:scale-105'>
          Ver Detalhes
        </button>
    </div>
  )
}

export default Project