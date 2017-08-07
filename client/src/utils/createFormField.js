import React from 'react'
import { connect } from 'react-redux'
import { withProps, wrapDisplayName, setDisplayName } from 'recompose'
import { path, curry } from 'ramda'

const createFormField = formName => field => actions => validationFn => ComposedComponent =>
    connect(store => ({
        form: store[formName],
        value: path([formName, 'values', field], store),
        error: path([formName, 'clientErrors', field], store) || path([formName, 'serverErrors', field], store)
    }))
    (withProps(props => ({
        updateField: (e) => props.dispatch(actions.updateField({field, value: e.target.value})),
        validateField: () => props.dispatch(actions.updateError({field, value: validationFn(props.form.values)[field]}))
    }))
    (setDisplayName(wrapDisplayName(ComposedComponent, 'FormField'))
    (ComposedComponent)))

export default curry(createFormField)