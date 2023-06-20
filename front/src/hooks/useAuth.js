import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi, getUserById } from "../services/authService";
import api from "../services/api";

const useAuth = () => {
  const [userLogged, setUserLogged] = useState(false)
  const [loading, setLoading] = useState(true)
  const [userFull, setUserFull] = useState({})
  const navigate = useNavigate()

  const findUserById = async ( idUser ) => {
    const response = await getUserById(idUser)
    console.log(response)
    setUserFull(response.data)
  }

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if(userInfo) {
      api.defaults.headers.common['Authorization'] = `Bearer ${userInfo.token}`
      findUserById(userInfo.id)
      setUserLogged(true)
    }
    setLoading(false)
  }, [])

  const login = async (credentials) => {
    const response = await loginApi(credentials)
    const data = await response.data
    localStorage.setItem('userInfo', JSON.stringify(data))
    api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
    setUserLogged(true)
    navigate('/')
  }

  const logout = () => {
    setUserLogged(false)
    localStorage.clear()
    setUserFull({})
    navigate('/login')
  }

  return { userLogged, loading, login, logout, userFull }
}

export default useAuth