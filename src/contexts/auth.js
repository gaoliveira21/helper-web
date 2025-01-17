import React, { createContext, useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

import api from '../services/api'

const AuthContext = createContext({})

export function AuthProvider ({ children }) {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem('@helper:user'))
  )

  useEffect(() => {
    const storagedToken = window.localStorage.getItem('@helper:token')
    if (storagedToken) { api.defaults.headers.Authorization = `Bearer ${storagedToken}` }
  }, [])

  async function signIn ({ email, password }) {
    try {
      const response = await api.post('/entities/auth', { email, password })

      const { token: accessToken, entity } = response.data

      api.defaults.headers.Authorization = `Bearer ${accessToken}`

      window.localStorage.setItem('@helper:token', accessToken)
      window.localStorage.setItem('@helper:user', JSON.stringify(entity))

      setUser(entity)
    } catch (error) {
      toast.error('Email ou senha incorretos')
    }
  }

  async function signUp ({ entity, profile }) {
    const entityResponse = await api.post('/entities', entity)

    const { token: accessToken, entity: registeredEntity } = entityResponse.data

    api.defaults.headers.Authorization = `Bearer ${accessToken}`

    const profileResponse = await api.post('/entities/profiles', profile)

    const registeredProfile = profileResponse.data

    registeredEntity.profile = registeredProfile

    window.localStorage.setItem('@helper:token', accessToken)
    window.localStorage.setItem('@helper:user', JSON.stringify(registeredEntity))

    window.localStorage.removeItem('@helper:step1:user')
    window.localStorage.removeItem('@helper:step2:user')
  }

  function successSignUp () {
    const entity = JSON.parse(window.localStorage.getItem('@helper:user'))

    setUser(entity)
  }

  function signOut () {
    window.localStorage.clear()
    setUser(null)
  }

  async function changeAvatar (file) {
    const formData = new window.FormData()

    formData.append('avatar', file)

    const uploadResponse = await api.post('/avatars', formData)

    const { id, filepath, url } = uploadResponse.data

    await api.put('/entities/profiles', {
      whatsapp: user.profile.whatsapp,
      avatar_id: id
    })

    user.profile.avatar = {
      id, filepath, url
    }

    setUser(user)
    window.localStorage.setItem('@helper:user', JSON.stringify(user))
    toast.success('Avatar alterado com sucesso')
    return user.profile.avatar
  }

  async function editProfile (values) {
    await api.put('/entities/profiles', values)

    user.profile = Object.assign(user.profile, values)
    window.localStorage.setItem('@helper:user', JSON.stringify(user))
    toast.success('Perfil alterado com sucesso')
    setUser(user)
  }

  async function editEntity (values) {
    try {
      await api.put('/entities', values)

      user.email = values.email
      user.name = values.name

      window.localStorage.setItem('@helper:user', JSON.stringify(user))
      toast.success('Dados alterados com sucesso')
      setUser(user)
    } catch (error) {
      toast.error('Falha na alteração, verifique seus dados e tente novamente')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
        successSignUp,
        signOut,
        changeAvatar,
        editProfile,
        editEntity
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.array.isRequired
}

export function useAuth () {
  const auth = useContext(AuthContext)

  return auth
}

export default AuthContext
