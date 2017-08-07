import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import modules from './modules'

const middlewares = applyMiddleware(createSagaMiddleware())
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(modules, composeEnhancers(middlewares))