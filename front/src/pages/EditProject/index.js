import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import findAllFerramentas from '../../services/ferramentaService'
import { MultiSelect } from "react-multi-select-component"
import { findProjectById, updateProjectById } from '../../services/projectService'
import { useNavigate } from 'react-router-dom'

const EditProduct = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const [projectForm, setProjectForm] = useState({
    _id: "",
    nome: "",
    linguagem: "",
    descricao: "",
    imagem: "",
    ferramentas: [{ _id: "" }]
  })

  const [ferramentas, setFerramentas] = useState([])

  const [selected, setSelected] = useState([])

  const getProjectById = async () => {
    const response = await findProjectById(id)
    setProjectForm(response.data)
  }

  const handleChangeValues = (event) => {
    setProjectForm({
      ...projectForm,
      [event.target.name]: event.target.value
    })
    console.log(projectForm)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await updateProjectById(id, projectForm)
    if(response) {
      alert(`Projeto ${response.data.nome} editado com sucesso!`)
      navigate('/admin')
    }
  }

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
    getProjectById()
  }, [])

  return (
    <section className='my-12 max-w-screen-xl mx-auto px-6'>
      <div className='flex flex-col space-y-2'>
        <h1 className='text-2xl text-gray-600'>Edição de Projetos</h1>
      </div>
      <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6'>
        <div className='flex flex-col space-y-2'>
          <label htmlFor="imagem" className='text-gray-500'>Imagem</label>
          <input
            placeholder='Insira o link da imagem'
            type="text"
            id='imagem'
            name='imagem'
            value={projectForm.imagem}
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
            value={projectForm.nome}
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
            value={projectForm.descricao}
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
            value={projectForm.linguagem}
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
            <button type='submit' className='w-full px-3 bg-primary text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300'>Salvar Edição</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default EditProduct