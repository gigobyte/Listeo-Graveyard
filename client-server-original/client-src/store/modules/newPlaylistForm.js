import * as api from '~/utils/api'

//ACTIONS
const UPDATE_FIELD = 'newPlaylistForm/UPDATE_FIELD'
const ADD_TAG = 'newPlaylistForm/ADD_TAG'
const REMOVE_TAG = 'newPlaylistForm/REMOVE_TAG'
const RESET = 'newPlaylistForm/RESET'
const CREATE_PLAYLIST = 'newPlaylistForm/CREATE_PLAYLIST'
const UPDATE_ERROR = 'newPlaylistForm/UPDATE_ERROR'
const NEXT_STEP = 'newPlaylistForm/NEXT_STEP'
const PREVIOUS_STEP = 'newPlaylistForm/PREVIOUS_STEP'

const DEFAULT_STATE = {
    values: {
        title: '',
        description: '',
        tags: [],
        private: false,
        thumbnail: {},
        step: 0
    },
    errors: {
        title: '',
        thumbnail: ''
    },
    $createPlaylist: {status: {}, error: ''}
}

export default function(state=DEFAULT_STATE, action) {
    if(action.type === ADD_TAG) {
        return {
            ...state,
            values: {...state.values, tags: [...state.values.tags, action.payload]}
        }
    }

    if(action.type === REMOVE_TAG) {
        const tagIndex = state.values.tags.findIndex((e) => e === action.payload)

        return {
            ...state,
            values: {...state.values, tags: state.values.tags.filter((_, index) => index !== tagIndex)}
        }
    }

    if(action.type === `${CREATE_PLAYLIST}_PENDING`) {
        return {
            ...state,
            $createPlaylist: {status: {pending: true}}
        }
    }

    if(action.type === `${CREATE_PLAYLIST}_FULFILLED`) {
        return {
            ...state,
            $createPlaylist: {status: {fulfilled: true}}
        }
    }

    if(action.type === `${CREATE_PLAYLIST}_REJECTED`) {
        return {
            ...state,
            $createPlaylist: {status: {rejected: true}, error: 'Internal server error'}
        }
    }

    if(action.type === NEXT_STEP) {
        return {
            ...state,
            values: {...state.values, step: state.values.step + 1}
        }
    }

    if(action.type === PREVIOUS_STEP) {
        return {
            ...state,
            values: {...state.values, step: state.values.step - 1}
        }
    }

    return state
}

//ACTION CREATORS
export const updateField = (payload) => ({type: UPDATE_FIELD, payload})
export const updateError = (payload) => ({type: UPDATE_ERROR, payload})
export const addTag = (payload) => ({type: ADD_TAG, payload})
export const removeTag = (payload) => ({type: REMOVE_TAG, payload})
export const reset = () => ({type: RESET})
export const createPlaylist = ({...form}) => ({type: CREATE_PLAYLIST, payload: api.createPlaylist({...form})})
export const nextStep = () => ({type: NEXT_STEP})
export const previousStep = () => ({type: PREVIOUS_STEP})
