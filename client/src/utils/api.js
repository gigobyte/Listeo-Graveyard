import axiosBase from 'axios'

const axios = axiosBase.create({
    baseURL: 'http://localhost:8081/'
})

export const register = formValues =>
    axios.post('auth/register', formValues)