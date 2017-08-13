import createFormModule from '../../utils/createFormModule'
import * as api from '../../utils/api'
import { REJECTED } from '../../utils/apiStatus'
import { assocPath } from 'ramda'

export const REGISTER = 'registerForm/REGISTER'

const DEFAULT_STATE = {
    values: {
        username: '',
        password: '',
        email: ''
    },
    clientErrors: {},
    serverErrors: {}
}

const registerErrors = {
    0: {field: 'username', message: 'Invalid username'},
    1: {field: 'password', message: 'Invalid password'},
    2: {field: 'email', message: 'Invalid email'},
    3: {field: 'username', message: 'User already exists'}
}

const m = createFormModule(DEFAULT_STATE, (state, action) => {
    if (action.type === REJECTED(REGISTER)) {
        const errorCode = action.payload.response.data.code
        const error = registerErrors[errorCode]
        return assocPath(['serverErrors', error.field], error.message, state)
    }

    return state
}, 'registerForm')

export default m.reducer;
export const { UPDATE_FIELD, UPDATE_ERROR, UPDATE_ERRORS } = m.actions;
export const { updateField, updateError, updateErrors } = m.actionCreators;

export const register = formValues => ({
    type: REGISTER,
    payload: api.register(formValues)
})