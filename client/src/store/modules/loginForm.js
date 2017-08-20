import * as api from 'utils/api'
import createFormModule from 'utils/createFormModule'

export const LOGIN = 'loginForm/LOGIN'

const DEFAULT_STATE = {
    values: {
        key: '',
        password: '',
    },
    clientErrors: {},
    serverErrors: {}
}

const m = createFormModule(DEFAULT_STATE, (state) => {
    return state
}, 'loginForm')

export default m.reducer;
export const { UPDATE_FIELD, UPDATE_ERROR, UPDATE_ERRORS } = m.actions;
export const { updateField, updateError, updateErrors } = m.actionCreators;

export const login = formValues => ({
    type: LOGIN,
    payload: api.login(formValues).then((response) => {
        localStorage.setItem('jwt', response.data.token)
        return response
    })
})