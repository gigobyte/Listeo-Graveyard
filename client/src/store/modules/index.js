import { combineReducers } from 'redux'
import loginForm from 'store/modules/loginForm'
import registerForm from 'store/modules/registerForm'
import state from 'store/modules/state'

export default combineReducers({
    registerForm,
    loginForm,
    state
})