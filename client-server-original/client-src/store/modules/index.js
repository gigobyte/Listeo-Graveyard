import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import auth from '~/store/modules/auth'
import state from '~/store/modules/state'
import loginForm from '~/store/modules/loginForm'
import registerForm from '~/store/modules/registerForm'
import newPlaylistForm from '~/store/modules/newPlaylistForm'

export default combineReducers({
    routing,
    auth,
    state,
    loginForm,
    registerForm,
    newPlaylistForm
})
