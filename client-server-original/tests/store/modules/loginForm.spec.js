import { expect } from 'chai'
import loginFormReducer, * as actions from '../../../client-src/store/modules/loginForm'

describe('loginForm: Reducer: loginForm', () => {
    it('Should return a reducer function', () => {
        expect(loginFormReducer).to.be.function
    })

    it('Should return the right state when passed action loginForm/LOGIN_PENDING', () => {
        const fakeAction = {type: 'loginForm/LOGIN_PENDING'}
        const result = loginFormReducer(null, fakeAction)
        expect(result).to.eql({$login: {status: {pending: true}}})
    })

    it('Should throw when passed action loginForm/LOGIN_FULFILLED with no data', () => {
        const fakeAction = {type: 'loginForm/LOGIN_FULFILLED'}
        const call = () => loginFormReducer(null, fakeAction)
        expect(call).to.throw(TypeError)
    })

    it('Should return the right state when passed action loginForm/LOGIN_FULFILLED', () => {
        const fakeAction = {
            type: 'loginForm/LOGIN_FULFILLED',
            payload: {data: {error: 'An error'}}
        }
        const result = loginFormReducer(null, fakeAction)
        expect(result).to.eql({$login: {status: {fulfilled: true}, error: 'An error'}})
    })

    it('Should return the right state when passed action loginForm/LOGIN_REJECTED', () => {
        const fakeAction = {type: 'loginForm/LOGIN_REJECTED'}
        const result = loginFormReducer(null, fakeAction)
        expect(result).to.eql({$login: {status: {rejected: true}, error: 'Internal server error'}})
    })

    it('Should return the right state when passed action loginForm/UPDATE_FIELD', () => {
        const fakeAction = {
            type: 'loginForm/UPDATE_FIELD',
            payload: {field: 'mock', value: 'test'}
        }
        const result = loginFormReducer({values: {}}, fakeAction)
        expect(result).to.eql({values: {mock: 'test'}})
    })

    it('Should return the right state when passed action loginForm/UPDATE_ERROR', () => {
        const fakeAction = {
            type: 'loginForm/UPDATE_ERROR',
            payload: {field: 'mock', value: 'test'}
        }
        const result = loginFormReducer({errors: {}}, fakeAction)
        expect(result).to.eql({errors: {mock: 'test'}})
    })

    it('Should return the right state when passed action loginForm/UPDATE_ERRORS', () => {
        const fakeAction = {
            type: 'loginForm/UPDATE_ERRORS',
            payload: {mock: 'test'}
        }
        const result = loginFormReducer({errors: {}}, fakeAction)
        expect(result).to.eql({errors: {mock: 'test'}})
    })
})

describe('loginForm: Action: updateField', () => {
    it('Should return the right action', () => {
        const result = actions.updateField({})
        expect(result.type).to.equal('loginForm/UPDATE_FIELD')
        expect(result.payload).to.eql({})
    })
})

describe('loginForm: Action: updateError', () => {
    it('Should return the right action', () => {
        const result = actions.updateError({})
        expect(result.type).to.equal('loginForm/UPDATE_ERROR')
        expect(result.payload).to.eql({})
    })
})

describe('loginForm: Action: updateErrors', () => {
    it('Should return the right action', () => {
        const result = actions.updateErrors({})
        expect(result.type).to.equal('loginForm/UPDATE_ERRORS')
        expect(result.payload).to.eql({})
    })
})

describe('loginForm: Action: login', () => {
    it('Should throw error if no parameters are passed', () => {
        expect(() => actions.login()).to.throw(TypeError)
    })

    it('Should return the right action', () => {
        const result = actions.login({})
        expect(result.type).to.equal('loginForm/LOGIN')
        expect(result.payload).to.be.an.instanceof(Promise)
    })
})
