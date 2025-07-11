// lib/api.ts
import axios from 'axios'

const api = axios.create({
  //baseURL: 'http://localhost:3001/api',
  baseURL: 'https://sempregreen-backend.onrender.com/api',
})

export default api
