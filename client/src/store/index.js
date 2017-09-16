import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import modules, { middleware, enhancer } from 'store/modules'

const middlewares = applyMiddleware(promise(), thunk, middleware)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(modules, composeEnhancers(enhancer, middlewares))