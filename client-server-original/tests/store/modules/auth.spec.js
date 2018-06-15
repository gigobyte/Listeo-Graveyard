import { expect } from 'chai'
import authReducer, * as actions from '../../../client-src/store/modules/auth'

describe('auth: Action: getCurrentUser', () => {
    it('Should return the right action', () => {
        const result = actions.getCurrentUser()
        expect(result.type).to.equal('auth/GET_CURRENT_USER')
        expect(result.payload).to.be.an.instanceof(Promise)
    })
})

describe('auth: Action: logout', () => {
    it('Should return the right action', () => {
        const result = actions.logout()
        expect(result.type).to.equal('auth/LOGOUT')
        expect(result.payload).to.be.undefined
    })
})

describe('auth: Reducer: auth', () => {
    it('Should return a reducer function', () => {
        expect(authReducer).to.be.function
    })

    it('Should return the right state when passed action auth/GET_CURRENT_USER_PENDING', () => {
        const fakeAction = {type: 'auth/GET_CURRENT_USER_PENDING'}
        const result = authReducer(null, fakeAction)
        expect(result).to.eql({$getCurrentUser: {status: {pending: true}}})
    })

    it('Should throw when passed action auth/GET_CURRENT_USER_FULFILLED with no data', () => {
        const fakeAction = {type: 'auth/GET_CURRENT_USER_FULFILLED'}
        const call = () => authReducer(null, fakeAction)
        expect(call).to.throw(TypeError)
    })

    it('Should return the right state when passed action auth/GET_CURRENT_USER_FULFILLED', () => {
        const fakeAction = {
            type: 'auth/GET_CURRENT_USER_FULFILLED',
            payload: {data: 'An user'}
        }
        const result = authReducer(null, fakeAction)
        expect(result).to.eql({$getCurrentUser: {status: {fulfilled: true}}, user: 'An user'})
    })

    it('Should return the right state when passed action auth/GET_CURRENT_USER_REJECTED', () => {
        const fakeAction = {type: 'auth/GET_CURRENT_USER_REJECTED'}
        const result = authReducer(null, fakeAction)
        expect(result).to.eql({$getCurrentUser: {status: {rejected: true}}})
    })

    it('Should return the right state when passed action loginForm/LOGIN_FULFILLED without error', () => {
        const fakeAction = {
            type: 'loginForm/LOGIN_FULFILLED',
            payload: {data: 'JWT token'}
        }
        const result = authReducer(null, fakeAction)
        expect(result).to.eql({jwt: 'JWT token'})
    })

    it('Should return null when passed action loginForm/LOGIN_FULFILLED with error', () => {
        const fakeAction = {
            type: 'loginForm/LOGIN_FULFILLED',
            payload: {data: {error: 'ERROR!'}}
        }
        const result = authReducer(null, fakeAction)
        expect(result).to.be.null
    })

    it('Should return the right state when passed action auth/LOGOUT', () => {
        const fakeAction = {
            type: 'auth/LOGOUT'
        }
        const result = authReducer(null, fakeAction)
        expect(result).to.eql({user: null, jwt: ''})
    })
})
