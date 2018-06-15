import { expect } from 'chai'
import registerFormReducer, * as actions from '../../../client-src/store/modules/registerForm'

describe('registerForm: Action: updateField', () => {
    it('Should return the right action', () => {
        const result = actions.updateField({})
        expect(result.type).to.equal('registerForm/UPDATE_FIELD')
        expect(result.payload).to.eql({})
    })
})

describe('registerForm: Action: updateError', () => {
    it('Should return the right action', () => {
        const result = actions.updateError({})
        expect(result.type).to.equal('registerForm/UPDATE_ERROR')
        expect(result.payload).to.eql({})
    })
})

describe('registerForm: Action: updateErrors', () => {
    it('Should return the right action', () => {
        const result = actions.updateErrors({})
        expect(result.type).to.equal('registerForm/UPDATE_ERRORS')
        expect(result.payload).to.eql({})
    })
})

describe('registerForm: Action: togglePasswordVisibility ', () => {
    it('Should return the right action', () => {
        const result = actions.togglePasswordVisibility()
        expect(result.type).to.equal('registerForm/TOGGLE_PASSWORD_VISIBILITY')
        expect(result.payload).to.be.undefined
    })
})

describe('registerForm: Action: register', () => {
    it('Should throw error if no parameters are passed', () => {
        expect(() => actions.register()).to.throw(TypeError)
    })

    it('Should return the right action', () => {
        const result = actions.register({email: '', username: '', password: ''})
        expect(result.type).to.equal('registerForm/REGISTER')
        expect(result.payload).to.be.an.instanceof(Promise)
    })
})

describe('registerForm: Reducer: registerForm', () => {
    it('Should return a reducer function', () => {
        expect(registerFormReducer).to.be.function
    })

    it('Should return the right state when passed action registerForm/UPDATE_FIELD', () => {
        const fakeAction = {
            type: 'registerForm/UPDATE_FIELD',
            payload: {field: 'mock', value: 'test'}
        }
        const result = registerFormReducer({values: {}}, fakeAction)
        expect(result).to.eql({values: {mock: 'test'}})
    })

    it('Should return the right state when passed action registerForm/UPDATE_ERROR', () => {
        const fakeAction = {
            type: 'registerForm/UPDATE_ERROR',
            payload: {field: 'mock', value: 'test'}
        }
        const result = registerFormReducer({errors: {}}, fakeAction)
        expect(result).to.eql({errors: {mock: 'test'}})
    })

    it('Should return the right state when passed action registerForm/UPDATE_ERRORS', () => {
        const fakeAction = {
            type: 'registerForm/UPDATE_ERRORS',
            payload: {mock: 'test'}
        }
        const result = registerFormReducer({errors: {}}, fakeAction)
        expect(result).to.eql({errors: {mock: 'test'}})
    })

    it('Should return the right state when passed action registerForm/REGISTER_PENDING', () => {
        const fakeAction = {type: 'registerForm/REGISTER_PENDING'}
        const result = registerFormReducer(null, fakeAction)
        expect(result).to.eql({$register: {status: {pending: true}}})
    })

    it('Should return the right state when passed action registerForm/REGISTER_FULFILLED', () => {
        const fakeAction = {
            type: 'registerForm/REGISTER_FULFILLED',
            payload: {data: {error: 'An error'}}
        }
        const result = registerFormReducer(null, fakeAction)
        expect(result).to.eql({$register: {status: {fulfilled: true}, error: 'An error'}})
    })

    it('Should return the right state when passed action registerForm/REGISTER_REJECTED', () => {
        const fakeAction = {type: 'registerForm/REGISTER_REJECTED'}
        const result = registerFormReducer(null, fakeAction)
        expect(result).to.eql({$register: {status: {rejected: true}, error: 'Internal server error'}})
    })

    it('Should return the right state when passed action registerForm/TOGGLE_PASSWORD_VISIBILITY', () => {
        const fakeAction = {type: 'registerForm/TOGGLE_PASSWORD_VISIBILITY'}
        const result = registerFormReducer({values: {mock: 'test', passwordVisible: false}}, fakeAction)
        expect(result).to.eql({values: {mock: 'test', passwordVisible: true}})
    })
})
