//ACTIONS
const TOGGLE_AUTH_SIDEBAR = 'state/TOGGLE_AUTH_SIDEBAR'
const SET_AUTH_SIDEBAR_PAGE = 'state/SET_AUTH_SIDEBAR_PAGE'
const SET_SEARCHBAR_VALUE = 'state/SET_SEARCHBAR_VALUE'
const TOGGLE_NEW_PLAYLIST_MODAL = 'state/TOGGLE_NEW_PLAYLIST_MODAL'
const TOGGLE_PROFILE_PICTURE_POPOVER = 'state/TOGGLE_PROFILE_PICTURE_POPOVER'
const SHOW_NOTIFICATION = 'state/SHOW_NOTIFICATION'
const HIDE_NOTIFICATION = 'state/HIDE_NOTIFICATION'
const WIPE_STATE = 'state/WIPE_STATE'
const DRAG_ENTER = 'state/DRAG_ENTER'
const DRAG_LEAVE = 'state/DRAG_LEAVE'

const DEFAULT_STATE = {
    authSidebarOpened: false,
    newPlaylistModalOpened: false,
    profilePicturePopoverOpened: false,
    authSidebarSelectedPage: 'register',
    searchbarValue: '',
    notificationSnackbarMessage: '',
    isDragging: false
}

//REDUCER
export default function (state=DEFAULT_STATE, action) {
    if(action.type === TOGGLE_AUTH_SIDEBAR) {
        return {
            ...state,
            authSidebarOpened: !state.authSidebarOpened
        }
    }

    if(action.type === SET_AUTH_SIDEBAR_PAGE) {
        return {
            ...state,
            authSidebarSelectedPage: action.payload
        }
    }

    if(action.type === SET_SEARCHBAR_VALUE) {
        return {
            ...state,
            searchbarValue: action.payload
        }
    }

    if(action.type === TOGGLE_NEW_PLAYLIST_MODAL) {
        return {
            ...state,
            newPlaylistModalOpened: !state.newPlaylistModalOpened
        }
    }

    if(action.type === TOGGLE_PROFILE_PICTURE_POPOVER) {
        return {
            ...state,
            profilePicturePopoverOpened: !state.profilePicturePopoverOpened
        }
    }

    if(action.type === SHOW_NOTIFICATION) {
        return {
            ...state,
            notificationSnackbarMessage: action.payload
        }
    }

    if(action.type === HIDE_NOTIFICATION) {
        return {
            ...state,
            notificationSnackbarMessage: ''
        }
    }

    if(action.type === DRAG_ENTER) {
        return {
            ...state,
            isDragging: true
        }
    }

    if(action.type === DRAG_LEAVE) {
        return {
            ...state,
            isDragging: false
        }
    }

    return state
}

//ACTION CREATORS
export const toggleAuthSidebar = () => ({type: TOGGLE_AUTH_SIDEBAR})
export const toggleNewPlaylistModal = () => ({type: TOGGLE_NEW_PLAYLIST_MODAL})
export const toggleProfilePicturePopover = () => ({type: TOGGLE_PROFILE_PICTURE_POPOVER})
export const setSearchbarValue = (payload) => ({type: SET_SEARCHBAR_VALUE, payload})
export const showNotification = (payload) => ({type: SHOW_NOTIFICATION, payload})
export const hideNotification = () => ({type: HIDE_NOTIFICATION})
export const wipeState = () => ({type: WIPE_STATE})
export const dragEnter = () => ({type: DRAG_ENTER})
export const dragLeave = () => ({type: DRAG_LEAVE})
export const setAuthSidebarPage = (payload) => {
    if(!['about', 'login', 'register'].includes(payload)) {
        throw new Error(`Invalid sidebar page: ${payload}`)
    }

    return {type: SET_AUTH_SIDEBAR_PAGE, payload}
}
