import { expect } from 'chai'
import newPlaylistFormReducer, * as actions from '../../../client-src/store/modules/newPlaylistForm'

describe('newPlaylistForm: Action: updateField', () => {
    it('Should return the right action', () => {
        const result = actions.updateField({})
        expect(result.type).to.equal('newPlaylistForm/UPDATE_FIELD')
        expect(result.payload).to.eql({})
    })
})

describe('newPlaylistForm: Action: updateError', () => {
    it('Should return the right action', () => {
        const result = actions.updateError({})
        expect(result.type).to.equal('newPlaylistForm/UPDATE_ERROR')
        expect(result.payload).to.eql({})
    })
})

describe('newPlaylistForm: Action: addTag', () => {
    it('Should return the rigth action', () => {
        const result = actions.addTag('test')
        expect(result.type).to.equal('newPlaylistForm/ADD_TAG')
        expect(result.payload).to.eql('test')
    })
})

describe('newPlaylistForm: Action: removeTag', () => {
    it('Should return the rigth action', () => {
        const result = actions.removeTag('test')
        expect(result.type).to.equal('newPlaylistForm/REMOVE_TAG')
        expect(result.payload).to.eql('test')
    })
})

describe('newPlaylistForm: Action: reset', () => {
    it('Should return the rigth action', () => {
        const result = actions.reset()
        expect(result.type).to.equal('newPlaylistForm/RESET')
    })
})

describe('newPlaylistForm: Action: createPlaylist', () => {
    it('Should return the rigth action', () => {
        const result = actions.createPlaylist({})
        expect(result.type).to.equal('newPlaylistForm/CREATE_PLAYLIST')
        expect(result.payload).to.be.an.instanceof(Promise)
    })
})

describe('newPlaylistForm: Reducer: newPlaylistForm', () => {
    it('Should return a reducer function', () => {
        expect(newPlaylistFormReducer).to.be.function
    })

    it('Should return the right state when passed action newPlaylistForm/ADD_TAG', () => {
        const fakeAction = {
            type: 'newPlaylistForm/ADD_TAG',
            payload: 'test'
        }
        const result = newPlaylistFormReducer({values: {tags: ['a']}}, fakeAction)
        expect(result).to.eql({values: {tags: ['a', 'test']}})
    })

    it('Should return the right state when passed action newPlaylistForm/REMOVE_TAG', () => {
        const fakeAction = {
            type: 'newPlaylistForm/REMOVE_TAG',
            payload: 'test'
        }
        const result = newPlaylistFormReducer({values: {tags: ['test', 'test2']}}, fakeAction)
        expect(result).to.eql({values: {tags: ['test2']}})
    })

    it('Should return the right state when passed action newPlaylistForm/CREATE_PLAYLIST_PENDING', () => {
        const fakeAction = {type: 'newPlaylistForm/CREATE_PLAYLIST_PENDING'}
        const result = newPlaylistFormReducer(null, fakeAction)
        expect(result).to.eql({$createPlaylist: {status: {pending: true}}})
    })

    it('Should return the right state when passed action newPlaylistForm/CREATE_PLAYLIST_FULFILLED', () => {
        const fakeAction = {type: 'newPlaylistForm/CREATE_PLAYLIST_FULFILLED'}
        const result = newPlaylistFormReducer(null, fakeAction)
        expect(result).to.eql({$createPlaylist: {status: {fulfilled: true}}})
    })

    it('Should return the right state when passed action newPlaylistForm/CREATE_PLAYLIST_REJECTED', () => {
        const fakeAction = {type: 'newPlaylistForm/CREATE_PLAYLIST_REJECTED'}
        const result = newPlaylistFormReducer(null, fakeAction)
        expect(result).to.eql({$createPlaylist: {status: {rejected: true}, error: 'Internal server error'}})
    })
})
