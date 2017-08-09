import { connect } from 'react-redux'
import { withProps, wrapDisplayName, setDisplayName, compose } from 'recompose'
import { path, curry } from 'ramda'

const createFormField = (actions, validationFn, formName, field, ComposedComponent) => {
    const getProps = connect(store => ({
        form: store[formName],
        value: path([formName, 'values', field], store),
        error: path([formName, 'clientErrors', field], store) || path([formName, 'serverErrors', field], store)
    }))

    const attachMethods = withProps(props => ({
        updateField: (e) => props.dispatch(actions.updateField({field, value: e.target.value})),
        validateField: () => props.dispatch(actions.updateError({field, value: validationFn(props.form.values)[field]}))
    }))

    const setFormFieldDisplayName = setDisplayName(wrapDisplayName(ComposedComponent, 'FormField'))

    return compose(getProps, attachMethods, setFormFieldDisplayName)(ComposedComponent)
}

export default curry(createFormField)