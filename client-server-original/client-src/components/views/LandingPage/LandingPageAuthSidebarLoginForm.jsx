//Libraries
import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
//Components
import { Col, Row } from 'reactstrap'
import TextField from 'material-ui/TextField'
import PlayButton from '~/components/shared/PlayButton'
import Icon from '~/components/shared/Icon'
//Styles and Media
import { formRowPadding, inputIcon, textFieldFull, errorText } from '~/styles/shared.scss'
//Store
import store from '~/store'
import { getCurrentUser } from '~/store/modules/auth'
import { login, updateField, updateError, updateErrors } from '~/store/modules/loginForm'
//Other
import { validateLoginForm, hasAnyErrors } from '~/utils/validation'

@connect((store) => ({
    form: store.loginForm
}))
class LandingPageAuthSidebarLogin extends React.Component {
    handleTextFieldChange = (field) => (event) => {
        const validationErrors = validateLoginForm({[field]: event.target.value})

        store.dispatch(updateField({field, value: event.target.value}))
        store.dispatch(updateError({field, value: validationErrors[field]}))
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            this.login()
        }
    }

    login = () => {
        const { values } = this.props.form

        const validationErrors = validateLoginForm(values)

        if(hasAnyErrors(validationErrors)) {
            store.dispatch(updateErrors(validationErrors))
        } else {
            store.dispatch(login(values)).then(() => {
                store.dispatch(getCurrentUser())
            })
        }
    }

    render() {
        const { values, errors, $login } = this.props.form

        return (
            <div onKeyPress={this.handleKeyPress}>
                <Row class={formRowPadding}>
                    <Col md={{size: 1, offset: 1}}>
                        <Icon icon={classNames('fa fa-user-o', inputIcon)} />
                    </Col>
                    <Col md={9}>
                        <TextField class={textFieldFull}
                                    name="username"
                                    hintText="Username"
                                    onChange={this.handleTextFieldChange('username')}
                                    value={values.username}
                                    errorText={errors.username}
                        />
                    </Col>
                </Row>
                <Row class={formRowPadding}>
                    <Col md={{size: 1, offset: 1}}>
                        <Icon icon={classNames('fa fa-key', inputIcon)} />
                    </Col>
                    <Col md={9}>
                        <TextField class={textFieldFull}
                                    name="password"
                                    hintText="Password"
                                    onChange={this.handleTextFieldChange('password')}
                                    type='password'
                                    value={values.password}
                                    errorText={errors.password}
                        />
                    </Col>
                </Row>
                <PlayButton apiCallStatus={$login.status} onClick={this.login}/><br/>
                <h6 class={errorText}>{$login.error}</h6>
            </div>
        )
    }
}

export default LandingPageAuthSidebarLogin
