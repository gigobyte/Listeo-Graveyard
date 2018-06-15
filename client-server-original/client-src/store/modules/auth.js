import * as api from '~/utils/api'
import { LOGIN } from '~/store/modules/loginForm'

const GET_CURRENT_USER = 'auth/GET_CURRENT_USER'
const LOGOUT = 'auth/LOGOUT'

export default function(state={
    $getCurrentUser: {status: {}, error: ''},
    user: null,
    jwt: localStorage.getItem('jwt')
}, action) {
    if(action.type === `${GET_CURRENT_USER}_PENDING`) {
        return {
            ...state,
            $getCurrentUser: {status: {pending: true}}
        }
    }

    if(action.type === `${GET_CURRENT_USER}_FULFILLED`) {
        return {
            ...state,
            $getCurrentUser: {status: {fulfilled: true}},
            user: action.payload.data
        }
    }

    if(action.type === `${GET_CURRENT_USER}_REJECTED`) {
        return {
            ...state,
            $getCurrentUser: {status: {rejected: true}}
        }
    }

    if(action.type === `${LOGIN}_FULFILLED`) {
        const { data } = action.payload

        if(!data.error) {
            localStorage.setItem('jwt', data)

            return {
                ...state,
                jwt: data
            }
        }

        return state
    }

    if(action.type === LOGOUT) {
        return {
            ...state,
            user: null,
            jwt: ''
        }
    }

    return state
}

export const getCurrentUser = () => ({
    type: GET_CURRENT_USER,
    payload: api.getCurrentUser()
})

export const logout = () => {
    localStorage.setItem('jwt', '')

    return {
        type: LOGOUT
    }
}
