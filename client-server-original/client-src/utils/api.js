import axios from 'axios'
import store from '~/store'

const getHeader = () => ({headers: {'Authorization': `Bearer ${store.getState().auth.jwt}`}})

export function register(data) {
    return axios.post('/api/auth/register', data, getHeader())
}

export function login(data) {
    return axios.post('/api/auth/login', data, getHeader())
}

export function getCurrentUser() {
    return axios.get('/api/auth/user', getHeader())
}

export function createPlaylist(data) {
    return axios.post('/api/playlist', data, getHeader())
}
