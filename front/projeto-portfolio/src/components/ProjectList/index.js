import React, { useEffect, useState } from 'react'
import Project from '../Project'
import { findAllProjects } from '../../services/projectService';

const ProjectList = () => {

  const [categoriaClick, setCategoriaClick] = useState('Todos');

  const [projects, setProjects] = useState([])

  useEffect(() => {
    getAllProjects()
  }, [])

  const getAllProjects = async () => {
    const response = await findAllProjects()
    console.log(response)
    setProjects(response.data)
  }

  return (
    <section className='my-12 max-width-screen-xl mx-auto px-3'>
        {/* Menu de categoria */}
        <div className='flex items-center justify-center space-x-6'>
          <p className={categoriaClick === 'Todos' ? 'active-menu-tab bg-primary' : 'menu-tab'} onClick={() => setCategoriaClick('Todos')}>Todos</p>
          <p className={categoriaClick === 'Java' ? 'active-menu-tab bg-primary' : 'menu-tab'} onClick={() => setCategoriaClick('Java')}>Java</p>
          <p className={categoriaClick === 'Javascript' ? 'active-menu-tab bg-primary' : 'menu-tab'} onClick={() => setCategoriaClick('Javascript')}>Javascript</p>
          <p className={categoriaClick === 'Node.js' ? 'active-menu-tab bg-primary' : 'menu-tab'} onClick={() => setCategoriaClick('Node.js')}>Node.js</p>
          <p className={categoriaClick === 'React.js' ? 'active-menu-tab bg-primary' : 'menu-tab'} onClick={() => setCategoriaClick('React.js')}>React.js</p>
          <p className={categoriaClick === 'Python' ? 'active-menu-tab bg-primary' : 'menu-tab'} onClick={() => setCategoriaClick('Python')}>Python</p>
          <p className={categoriaClick === 'HTMLCSS' ? 'active-menu-tab bg-primary' : 'menu-tab'} onClick={() => setCategoriaClick('HTMLCSS')}>HTML5 / CSS3</p>
        </div>
        {/* Lista de Projetos */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
          {projects.map(project => (
            <Project key={project._id} project={project} />
          ))}
        </div>
    </section>
  )
}

export default ProjectList;