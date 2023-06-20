import React, { useContext } from 'react'
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { IoNewspaperSharp } from 'react-icons/io5'
import { MdLogout } from 'react-icons/md'

const NavBar = () => {
  const { userLogged, logout, userFull } = useContext(AuthContext)
  console.log(userLogged)
  const navigate = useNavigate()

  return (
    <header className='bg-secondary z-50 w-full'>
        <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
          <div className='flex flex-grow items-center'>
            <img onClick={() => navigate('/')} src={logo} alt='Logo' className='w-32 cursor-pointer mx-6'/>
            <h1 className='text-center text-3xl px-6 font-semibold text-gray-700'>Henrique Mazzola</h1>
            <h1 className='text-center text-3xl font-semibold text-gray-700'>|</h1>
            <h1 className='text-center text-3xl px-6 font-light text-gray-700'>Full Stack Dev</h1>
          </div>
          {userLogged ? (
            <div className='flex items-center justify-end space-x-4'>
              <span className='relative h-4 rounded-full flex items-center justify-center text-transparent transform transition duration-300 hover:scale-105 hover:text-gray-700'>
                <p className='absolute right-6 bg-transparent rounded-full mr-2'>Currículo</p>
                <IoNewspaperSharp className='w-6 h-6 cursor-pointer text-gray-700' onClick={() => navigate('/curriculo')}/>
              </span>
              <p className='text-gray-700'>Bem vindo, {userFull.nome}!</p>
              <Link to='/admin'>Admin</Link>
              <span className='relative h-4 rounded-full flex items-center justify-center text-transparent transform transition duration-300 hover:scale-105 hover:text-gray-700'>
                <p className='absolute left-6 bg-transparent rounded-full ml-2'>Logout</p>
                <MdLogout className='w-6 h-6 cursor-pointer text-gray-700' onClick={logout}/>
              </span>
            </div>
          ) : (
            <div className='flex items-center justify-end space-x-6'>
              <button onClick={() => navigate('/login')}>Login</button>
              <button onClick={() => navigate('/register')} className='bg-primary px-6 py-3 text-white rounded-full transition duration-700 hover:scale-105'>Contato</button>
            </div>
          )}
        </nav>
    </header>
  )
}

export default NavBar;