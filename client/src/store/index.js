import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import modules from './modules'

const middlewares = applyMiddleware(promise(), thunk)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(modules, composeEnhancers(middlewares))