import { map, concat, assoc, assocPath } from 'ramda'

const createFormModule = (defaultState, composedReducer, formName) => {
    const [
        UPDATE_FIELD, UPDATE_ERROR, UPDATE_ERRORS, RESET
    ] = map(concat(formName + '/'), ['UPDATE_FIELD', 'UPDATE_ERROR', 'UPDATE_ERRORS', 'RESET'])

    return {
        reducer: (state=defaultState, action) => {
            const { type, payload } = action

            switch (type) {
                case UPDATE_FIELD:
                    return assocPath(['values', payload.field], payload.value, state)
                case UPDATE_ERROR:
                    return assocPath(['clientErrors', payload.field], payload.value, state)
                case UPDATE_ERRORS:
                    return assoc('clientErrors', payload, state)
                case RESET:
                    return defaultState
                default:
                    return composedReducer(state, action)
            }
        },
        actions: { UPDATE_FIELD, UPDATE_ERROR, UPDATE_ERRORS, RESET },
        actionCreators: {
            updateField: (payload) => ({type: UPDATE_FIELD, payload}),
            updateError: (payload) => ({type: UPDATE_ERROR, payload}),
            updateErrors: (payload) => ({type: UPDATE_ERRORS, payload}),
            reset: () => ({type: RESET})
        }
    }
}

export default createFormModule;