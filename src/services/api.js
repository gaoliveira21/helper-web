import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('@helper:token')}`
  }
})

export default api
