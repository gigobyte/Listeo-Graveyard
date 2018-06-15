import { expect } from 'chai'
import * as validation from '../../client-src/utils/validation'

describe('validation: Method: validateLoginForm', () => {
    it('Should return object with errors when the values are invalid', () => {
        expect(validation.validateLoginForm({})).to.eql({
            username: 'This field is required',
            password: 'This field is required'
        })
    })
})

describe('validation: Method: validateRegisterForm', () => {
    it('Should return object with errors when the values are invalid', () => {
        expect(validation.validateRegisterForm({})).to.eql({
            username: 'This field is required',
            password: 'This field is required',
            email: 'This field is required'
        })
    })
})

describe('validation: Method: validateNewPlaylistForm', () => {
    it('Should return object with errors when the values are invalid', () => {
        expect(validation.validateNewPlaylistForm({thumbnail: {type: ''}})).to.eql({
            title: 'This field is required',
            thumbnail: 'Invalid file type'
        })
    })
})

describe('validation: Method: hasAnyErrors', () => {
    it('Should return true if object has a key', () => {
        expect(validation.hasAnyErrors({a: 'key'})).to.be.true
    })

    it('Should return false on an empty object', () => {
        expect(validation.hasAnyErrors({a: ''})).to.be.false
    })
})

describe('validation: Method: validateRequired', () => {
    it('Should return error when the value is empty string', () => {
        expect(validation.validateRequired('')).to.equal('This field is required')
    })

    it('Should return nothing when the value is non-empty string', () => {
        expect(validation.validateRequired('test')).to.be.undefined
    })
})

describe('validation: Method: validateUsername', () => {
    it('Should return error when the value is empty string', () => {
        expect(validation.validateUsername('')).to.equal('This field is required')
    })

    it('Should return error when the value has less than 3 characters', () => {
        const EXPECTED_ERROR = 'Usernames should not contain special characters and must be at least 3 characters long'
        expect(validation.validateUsername('t')).to.equal(EXPECTED_ERROR)
    })

    it('Should return error when the value has special characters', () => {
        const EXPECTED_ERROR = 'Usernames should not contain special characters and must be at least 3 characters long'
        expect(validation.validateUsername('t!@#@$%')).to.equal(EXPECTED_ERROR)
    })

    it('Should return nothing when the value is a valid username', () => {
        expect(validation.validateUsername('test123')).to.be.undefined
    })
})

describe('validation: Method: validatePassword', () => {
    it('Should return error when the value is empty string', () => {
        expect(validation.validatePassword('')).to.equal('This field is required')
    })

    it('Should return error when the value has less than 6 characters', () => {
        expect(validation.validatePassword('t$st')).to.equal('Passwords should be at least 6 characters long')
    })

    it('Should return nothing when the value is a valid username', () => {
        expect(validation.validatePassword('test123#$')).to.be.undefined
    })
})

describe('validation: Method: validateEmail', () => {
    it('Should return error when the value is empty string', () => {
        expect(validation.validateEmail('')).to.equal('This field is required')
    })

    it('Should return error when the value doesnt have a @', () => {
        expect(validation.validateEmail('testmail')).to.equal('Invalid email')
    })

    it('Should return nothing when the value has a @', () => {
        expect(validation.validateEmail('test@mail')).to.be.undefined
    })
})

describe('validation: Method: validateThumbnail', () => {
    it('Should return error when the file type is not image', () => {
        expect(validation.validateThumbnail({type: 'blob'})).to.equal('Invalid file type')
    })

    it('Should return error when the file is bigger than 1MB', () => {
        expect(validation.validateThumbnail({type: 'image/', size: 1000001})).to.equal('File is too big')
    })

    it('Should return nothing when the file is image and size smaller than 1MB', () => {
        expect(validation.validateThumbnail({type: 'image/', size: 10000})).to.be.undefined
    })
})
