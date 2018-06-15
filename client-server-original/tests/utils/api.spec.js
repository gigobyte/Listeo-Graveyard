import { expect } from 'chai'
import axios from 'axios'
import sinon from 'sinon'
import * as api from '../../client-src/utils/api'

const callPost = sinon.spy(axios, 'post')
const callGet = sinon.spy(axios, 'get')

describe('api: Method: register', () => {
    it('Should return a promise', () => {
        expect(api.register()).to.be.an.instanceof(Promise)
    })

    it('Should make an ajax call to /api/auth/register with the passed data argument', () => {
        api.register({test: 'data'})
        sinon.assert.calledOnce(callPost)
        sinon.assert.alwaysCalledWith(callPost, '/api/auth/register', {test: 'data'})
    })
})

describe('api: Method: login', () => {
    it('Should return a promise', () => {
        expect(api.login()).to.be.an.instanceof(Promise)
    })

    it('Should make an ajax call to /api/auth/login with the passed data argument', () => {
        api.login({test: 'data'})
        sinon.assert.calledOnce(callPost)
        sinon.assert.alwaysCalledWith(callPost, '/api/auth/login', {test: 'data'})
    })
})

describe('api: Method: getCurrentUser', () => {
    it('Should return a promise', () => {
        expect(api.getCurrentUser()).to.be.an.instanceof(Promise)
    })

    it('Should make an ajax call to /api/auth/user', () => {
        api.getCurrentUser()
        sinon.assert.calledOnce(callGet)
        sinon.assert.alwaysCalledWith(callGet, '/api/auth/user')
    })
})

describe('api: Method: createPlaylist', () => {
    it('Should return a promise', () => {
        expect(api.createPlaylist()).to.be.an.instanceof(Promise)
    })

    it('Should make an ajax call to /api/playlist with the passed data argument', () => {
        api.createPlaylist({test: 'data'})
        sinon.assert.calledOnce(callPost)
        sinon.assert.alwaysCalledWith(callPost, '/api/playlist', {test: 'data'})
    })
})

afterEach(() => {
    callPost.reset()
    callGet.reset()
})

process.on('unhandledRejection', () => {})
