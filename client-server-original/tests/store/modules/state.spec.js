import { expect } from 'chai'
import stateReducer, * as actions from '../../../client-src/store/modules/state'

describe('state: Action: toggleAuthSidebar', () => {
    it('Should return the right action', () => {
        const result = actions.toggleAuthSidebar()
        expect(result.type).to.equal('state/TOGGLE_AUTH_SIDEBAR')
        expect(result.payload).to.be.undefined
    })
})

describe('state: Action: toggleNewPlaylistModal', () => {
    it('Should return the right action', () => {
        const result = actions.toggleNewPlaylistModal()
        expect(result.type).to.equal('state/TOGGLE_NEW_PLAYLIST_MODAL')
        expect(result.payload).to.be.undefined
    })
})

describe('state: Action: toggleProfilePicturePopover', () => {
    it('Should return the right action', () => {
        const result = actions.toggleProfilePicturePopover()
        expect(result.type).to.equal('state/TOGGLE_PROFILE_PICTURE_POPOVER')
        expect(result.payload).to.be.undefined
    })
})

describe('state: Action: setSearchbarValue', () => {
    it('Should return the right action', () => {
        const result = actions.setSearchbarValue('test')
        expect(result.type).to.equal('state/SET_SEARCHBAR_VALUE')
        expect(result.payload).to.equal('test')
    })
})

describe('state: Action: showNotification', () => {
    it('Should return the right action', () => {
        const result = actions.showNotification('test')
        expect(result.type).to.equal('state/SHOW_NOTIFICATION')
        expect(result.payload).to.equal('test')
    })
})

describe('state: Action: hideNotification', () => {
    it('Should return the right action', () => {
        const result = actions.hideNotification()
        expect(result.type).to.equal('state/HIDE_NOTIFICATION')
        expect(result.payload).to.be.undefined
    })
})

describe('state: Action: wipeState', () => {
    it('Should return the right action', () => {
        const result = actions.wipeState()
        expect(result.type).to.equal('state/WIPE_STATE')
        expect(result.payload).to.be.undefined
    })
})

describe('state: Action: setAuthSidebarPage', () => {
    it('Should throw error if the page is invalid', () => {
        expect(() => actions.setAuthSidebarPage('random')).to.throw(Error)
    })

    it('Should return the right action', () => {
        const result = actions.setAuthSidebarPage('login')
        expect(result.type).to.equal('state/SET_AUTH_SIDEBAR_PAGE')
        expect(result.payload).to.equal('login')
    })
})

describe('state: Reducer: state', () => {
    it('Should return a reducer function', () => {
        expect(stateReducer).to.be.function
    })

    it('Should return the right state when passed action state/TOGGLE_AUTH_SIDEBAR', () => {
        const fakeAction = {type: 'state/TOGGLE_AUTH_SIDEBAR'}
        const result = stateReducer({authSidebarOpened: false}, fakeAction)
        expect(result).to.eql({authSidebarOpened: true})
    })

    it('Should return the right state when passed action state/SET_AUTH_SIDEBAR_PAGE', () => {
        const fakeAction = {
            type: 'state/SET_AUTH_SIDEBAR_PAGE',
            payload: 'test'
        }
        const result = stateReducer(null, fakeAction)
        expect(result).to.eql({authSidebarSelectedPage: 'test'})
    })

    it('Should return the right state when passed action state/SET_SEARCHBAR_VALUE', () => {
        const fakeAction = {
            type: 'state/SET_SEARCHBAR_VALUE',
            payload: 'test'
        }
        const result = stateReducer(null, fakeAction)
        expect(result).to.eql({searchbarValue: 'test'})
    })

    it('Should return the right state when passed action state/TOGGLE_NEW_PLAYLIST_MODAL', () => {
        const fakeAction = {type: 'state/TOGGLE_NEW_PLAYLIST_MODAL'}
        const result = stateReducer({newPlaylistModalOpened: false}, fakeAction)
        expect(result).to.eql({newPlaylistModalOpened: true})
    })

    it('Should return the right state when passed action state/TOGGLE_PROFILE_PICTURE_POPOVER', () => {
        const fakeAction = {type: 'state/TOGGLE_PROFILE_PICTURE_POPOVER'}
        const result = stateReducer({profilePicturePopoverOpened: false}, fakeAction)
        expect(result).to.eql({profilePicturePopoverOpened: true})
    })

    it('Should return the right state when passed action state/SHOW_NOTIFICATION', () => {
        const fakeAction = {
            type: 'state/SHOW_NOTIFICATION',
            payload: 'test'
        }
        const result = stateReducer(null, fakeAction)
        expect(result).to.eql({notificationSnackbarMessage: 'test'})
    })

    it('Should return the right state when passed action state/HIDE_NOTIFICATION', () => {
        const fakeAction = {type: 'state/HIDE_NOTIFICATION'}
        const result = stateReducer(null, fakeAction)
        expect(result).to.eql({notificationSnackbarMessage: ''})
    })
})
