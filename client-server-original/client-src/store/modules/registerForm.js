import * as api from '~/utils/api'

const UPDATE_FIELD = 'registerForm/UPDATE_FIELD'
const TOGGLE_PASSWORD_VISIBILITY = 'registerForm/TOGGLE_PASSWORD_VISIBILITY'
const UPDATE_ERROR = 'registerForm/UPDATE_ERROR'
const UPDATE_ERRORS = 'registerForm/UPDATE_ERRORS'
const REGISTER = 'registerForm/REGISTER'

const DEFAULT_STATE = {
    values: {
        username: '',
        password: '',
        passwordVisible: false
    },
    errors: {
        username: '',
        password: ''
    },
    $register: {status: {}, error: ''}
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

    if(action.type === TOGGLE_PASSWORD_VISIBILITY) {
        return {
            ...state,
            values: {...state.values, passwordVisible: !state.values.passwordVisible}
        }
    }

    if(action.type === `${REGISTER}_PENDING`) {
        return {
            ...state,
            $register: {status: {pending: true}}
        }
    }

    if(action.type === `${REGISTER}_FULFILLED`) {
        return {
            ...state,
            $register: {status: {fulfilled: true}, error: action.payload.data.error}
        }
    }

    if(action.type === `${REGISTER}_REJECTED`) {
        return {
            ...state,
            $register: {status: {rejected: true}, error: 'Internal server error'}
        }
    }

    return state
}
//ACTION CREATORS
export const updateField = (payload) => ({type: UPDATE_FIELD, payload})
export const updateError = (payload) => ({type: UPDATE_ERROR, payload})
export const updateErrors = (payload) => ({type: UPDATE_ERRORS, payload})
export const togglePasswordVisibility = () => ({type: TOGGLE_PASSWORD_VISIBILITY})
export const register = ({ email, username, password}) => ({
    type: REGISTER,
    payload: api.register({email, username, password})
})
