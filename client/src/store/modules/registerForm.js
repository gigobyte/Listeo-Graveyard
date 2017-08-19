import createFormModule from '../../utils/createFormModule'
import * as api from '../../utils/api'
import { FULFILLED } from '../../utils/apiStatus'
import { assoc, toPairs, reduce } from 'ramda'

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
    0: 'Invalid username',
    1: 'Invalid password',
    2: 'Invalid email',
    3: 'User already exists'
}

const m = createFormModule(DEFAULT_STATE, (state, action) => {
    if (action.type === FULFILLED(REGISTER)) {
        const errors = reduce((res, [ field, code ]) => assoc(field, registerErrors[code], res), {}, toPairs(action.payload.data))

        return assoc('serverErrors', errors, state)
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