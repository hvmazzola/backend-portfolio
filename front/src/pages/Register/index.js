import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { registerApi } from '../../services/authService'

const Register = () => {
  const [inputValues, setInputValues] = useState({
    nome: '',
    email: '',
    senha: '',
    intituicao: ''
  })

  const handleChangeValues = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    })
    console.log(inputValues)
  }

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await registerApi(inputValues)
    if(response.data) {
      alert(`Usuário ${response.data.nome} cadastrado com sucesso!`)
      navigate('/login')
    }
  }

  const handleClick = () => {
    navigate('/login')
  }

  return (
    <main className='h-screen w-full banner'>
      <div className='flex pt-20 flex-col items-center h-screen space-y-6'>
        <img src={logo} alt='Logo' className='w-52'/>
        <h1 className='text-2xl text-gray-300'>Cadastro de contato</h1>
        <form onSubmit={handleSubmit} className='bg-secondary w-96 mt-6 p-4 rounded-lg shadow-lg'>
          <div className='flex flex-col space-y-6'>
            <input
              type="text"
              name='nome'
              placeholder='Digite seu nome'
              className='w-full px-4 py-3 rounded-lg ring-blue-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'
              onChange={handleChangeValues}
            />
            <input
              type="mail"
              name='email'
              placeholder='Digite seu e-mail'
              className='w-full px-4 py-3 rounded-lg ring-blue-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'
              onChange={handleChangeValues}
            />
            <input
              type="password"
              name='senha'
              placeholder='Digite seu senha'
              className='w-full px-4 py-3 rounded-lg ring-blue-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'
              onChange={handleChangeValues}
            />
            <input
              type="text"
              name='instituicao'
              placeholder='Digite o nome da sua intituição'
              className='w-full px-4 py-3 rounded-lg ring-blue-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'
              onChange={handleChangeValues}
            />
          </div>
          <button type='submit' className='w-full px-3 bg-primary text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300'>Cadastrar</button>
          <p className='text-base text-primary text-center my-6 hover:underline cursor-pointer' onClick={handleClick}>Já tem um cadastro?</p>
        </form>
      </div>
    </main>
  )
}
export default Register