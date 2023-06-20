import React, { useState, useContext } from 'react'
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../context/AuthContext'


const Login = () => {

  const { login } = useContext(AuthContext)

  const [inputValues, setInputValues] = useState({
    email: '',
    senha: ''
  })

  const handleChangeValues = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    })
    console.log(inputValues)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    login(inputValues)
  }

  return (
    <main className='h-screen w-full banner'>
      <div className='flex flex-col pt-20 h-screen items-center'>
        <img src={logo} alt='Logo' className='w-52'/>
        <form onSubmit={handleSubmit} action="" className='bg-secondary w-96 mt-6 p-4 rounded-lg shadow-lg'>
          <div className='flex flex-col space-y-6'>
            <input
              type="mail"
              placeholder='Digite o seu email'
              name='email'
              onChange={handleChangeValues}
              className='w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl'
            />
            <input
              type="password"
              placeholder='Digite sua senha'
              name='senha'
              onChange={handleChangeValues} 
              className='w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl'
            />
          </div>
          <button type='submit' className='w-full px-3 bg-primary text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300'>Entrar</button>
          <p className='text-base text-primary text-center my-6 hover:underline cursor-pointer'>Esqueceu a senha?</p>
        </form>
      </div>
    </main>
  )
}

export default Login