import axios from 'axios'

export const dogsApi = axios.create({
  baseURL: 'https://dog.ceo/api/breeds',
})

export const animesApi = axios.create({
  baseURL: 'http://localhost:3001/',
})
