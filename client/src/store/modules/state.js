import * as api from 'utils/api'
import { LOGIN } from 'store/modules/loginForm'
import { FULFILLED } from 'utils/apiStatus'
import { assoc } from 'ramda'

export const GET_CURRENT_USER = 'state/GET_CURRENT_USER'

const DEFAULT_STATE = {
    jwt: null,
    user: {}
}

export default (state=DEFAULT_STATE, action) => {
    switch(action.type) {
        case FULFILLED(LOGIN):
            return assoc('jwt', action.payload.data.token, state)
        case FULFILLED(GET_CURRENT_USER):
            return assoc('user', action.payload.data, state)
    }

    return state
}

export const getCurrentUser = () => ({
    type: GET_CURRENT_USER,
    payload: api.getCurrentUser()
})