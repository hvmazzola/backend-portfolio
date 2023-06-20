import React, { useEffect, useState } from 'react'
import findAllFerramentas from '../../services/ferramentaService'
import { MultiSelect } from "react-multi-select-component"
import { addProjectApi } from '../../services/projectService'
import { useNavigate } from 'react-router-dom'

const AddProject = () => {

  const [projectForm, setProjectForm] = useState({
    nome: "",
    linguagem: "",
    descricao: "",
    imagem: "",
    ferramentas: [{ _id: "" }]
  })

  const navigate = useNavigate()

  const handleChangeValues = (event) => {
    setProjectForm({
      ...projectForm,
      [event.target.name]: event.target.value
    })
    console.log(projectForm)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const ferramentasAdd = selected.map(ferramenta => {
      return {
        _id: ferramenta.value,
        nome: ferramenta.label
      }
    })
    const project = {
      ...projectForm,
      ferramentas: ferramentasAdd
    }
    console.log(project)
    const response = await addProjectApi(project)

    if(response.data){
      alert(`Projeto ${response.data.nome} cadastrado com sucesso!`)
      navigate('/admin')
    }
  }

  const [ferramentas, setFerramentas] = useState([])

  const [selected, setSelected] = useState([])

  const getFerramentas = async () => {
    const response = await findAllFerramentas()
    const ferramentasSelect = response.data.map((ferramenta) => {
      return {
        value: ferramenta._id,
        label: ferramenta.nome
      }
    })
    setFerramentas(ferramentasSelect)    
  }

  useEffect(() => {
    getFerramentas()
  }, [])

  return (
    <section className='my-12 max-w-screen-xl mx-auto px-6'>
      <div className='flex flex-col space-y-2'>
        <h1 className='text-2xl text-gray-600'>Cadastro de Projeto</h1>
      </div>
      <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6'>
        <div className='flex flex-col space-y-2'>
          <label htmlFor="imagem" className='text-gray-500'>Imagem</label>
          <input
            placeholder='Insira o link da imagem'
            type="text"
            id='imagem'
            name='imagem'
            required
            onChange={handleChangeValues}
            className='w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl'
          />
          <label htmlFor="nome" className='text-gray-500'>Nome</label>
          <input
            placeholder='Digite o nome do projeto'
            type="text"
            id='nome'
            name='nome'
            required
            onChange={handleChangeValues}
            className='w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl'
          />
          <label htmlFor="descricao" className='text-gray-500'>Descrição</label>
          <textarea
            placeholder='Insira uma descrição para o projeto'
            name="descricao"
            id="descricao"
            cols="30"
            rows="10"
            required
            onChange={handleChangeValues}
            className='w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl'
          />
        </div>
        <div className='flex flex-col space-y-2'>
          <label htmlFor="linguagem" className='text-gray-500'>Linguagem</label>
          <input
            placeholder='Insira apenas uma linguagem principal'
            type="text"
            id='linguagem'
            name='linguagem'
            required
            onChange={handleChangeValues}
            className='w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl'
          />
          <label htmlFor="ferramentas" className='text-gray-500'>Ferramentas</label>
          <MultiSelect
            options={ferramentas}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
          />
          <div className='mt-8'>
            <button type='submit' className='w-full px-3 bg-primary text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300'>Adicionar</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default AddProject