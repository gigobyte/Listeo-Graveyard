import * as actions from 'store/modules/state'

const authenticated = (dispatch) => 
    dispatch(actions.getCurrentUser())

export default {
    INDEX: { path: '/', thunk: authenticated }
}