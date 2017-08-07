import createFormModule from '../../utils/createFormModule'

const DEFAULT_STATE = {
    values: {
        username: '',
        password: '',
        email: ''
    },
    clientErrors: {},
    serverErrors: {}
}

const m = createFormModule(DEFAULT_STATE, (state, action) => {
    return state
}, 'registerForm')

export default m.reducer;
export const { UPDATE_FIELD, UPDATE_ERROR, UPDATE_ERRORS } = m.actions;
export const { updateField, updateError, updateErrors } = m.actionCreators;