import axiosBase from 'axios'

const getHeader = () => ({headers: {'Authorization': `${localStorage.getItem('jwt')}`}})

const axios = axiosBase.create({
    baseURL: 'http://localhost:8081/'
})

export const register = formValues =>
    axios.post('auth/register', formValues)

export const login = formValues =>
    axios.post('auth/login', formValues)

export const getCurrentUser = () =>
    axios.get('auth/me', getHeader())