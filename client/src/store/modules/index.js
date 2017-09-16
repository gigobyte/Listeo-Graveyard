import { combineReducers } from 'redux'
import { connectRoutes } from 'redux-first-router'
import loginForm from 'store/modules/loginForm'
import registerForm from 'store/modules/registerForm'
import state from 'store/modules/state'
import createHistory from 'history/createBrowserHistory'
import routes from 'routes'

const history = createHistory()
const { reducer, middleware, enhancer } = connectRoutes(history, routes)

export default combineReducers({
    location: reducer,
    registerForm,
    loginForm,
    state
})

export { middleware, enhancer }