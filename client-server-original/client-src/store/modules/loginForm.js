import * as api from '~/utils/api'

const UPDATE_FIELD = 'loginForm/UPDATE_FIELD'
const UPDATE_ERROR = 'loginForm/UPDATE_ERROR'
const UPDATE_ERRORS = 'loginForm/UPDATE_ERRORS'
export const LOGIN = 'loginForm/LOGIN'

const DEFAULT_STATE = {
    values: {
        username: '',
        password: ''
    },
    errors: {
        username: '',
        password: ''
    },
    $login: {status: {}, error: ''}
}

export default function(state=DEFAULT_STATE, action) {
    if(action.type === UPDATE_FIELD) {
        return {
            ...state,
            values: {...state.values, [action.payload.field]: action.payload.value}
        }
    }

    if(action.type === UPDATE_ERROR) {
        return {
            ...state,
            errors: {...state.errors, [action.payload.field]: action.payload.value}
        }
    }

    if(action.type === UPDATE_ERRORS) {
        return {
            ...state,
            errors: action.payload
        }
    }

    if(action.type === `${LOGIN}_PENDING`) {
        return {
            ...state,
            $login: {status: {pending: true}}
        }
    }

    if(action.type === `${LOGIN}_FULFILLED`) {
        const { error } = action.payload.data

        return {
            ...state,
            $login: {status: {fulfilled: true}, error}
        }
    }

    if(action.type === `${LOGIN}_REJECTED`) {
        return {
            ...state,
            $login: {status: {rejected: true}, error: 'Internal server error'}
        }
    }

    return state
}

//ACTION CREATORS
export const updateField = (payload) => ({type: UPDATE_FIELD, payload})
export const updateError = (payload) => ({type: UPDATE_ERROR, payload})
export const updateErrors = (payload) => ({type: UPDATE_ERRORS, payload})
export const login = ({ username, password }) => ({
    type: LOGIN,
    payload: api.login({username, password})
})
