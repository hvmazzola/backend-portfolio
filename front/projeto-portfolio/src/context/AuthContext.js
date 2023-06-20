import React, { createContext } from 'react'
import useAuth from '../hooks/useAuth'


const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const { userLogged, loading, login, logout, userFull } = useAuth()

  if(loading) {
    return <h1>Carregando...</h1>
  }

  return (
    <AuthContext.Provider value={{ userLogged, login, logout, userFull }}>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }