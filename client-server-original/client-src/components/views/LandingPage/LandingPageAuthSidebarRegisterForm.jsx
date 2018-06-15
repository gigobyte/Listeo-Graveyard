//Libraries
import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
//Components
import { Col, Row } from 'reactstrap'
import TextField from 'material-ui/TextField'
import PlayButton from '~/components/shared/PlayButton'
import ToggledIconButton from '~/components/shared/ToggledIconButton'
import Icon from '~/components/shared/Icon'
//Styles and Media
import { formRowPadding, inputIcon, textFieldFull, errorText } from '~/styles/shared.scss'
//Store
import store from '~/store'
import { setAuthSidebarPage, showNotification } from '~/store/modules/state'
import { register, updateField, updateError, updateErrors, togglePasswordVisibility } from '~/store/modules/registerForm'
//Other
import { validateRegisterForm, hasAnyErrors } from '~/utils/validation'

@connect((store) => ({
    form: store.registerForm
}))
class LandingPageAuthSidebarRegister extends React.Component {
    componentWillReceiveProps(newProps) {
        const { $register } = newProps.form

        if($register.status.fulfilled && !$register.error) {
            store.dispatch(showNotification('Registration successful'))
            store.dispatch(setAuthSidebarPage('login'))
        }
    }

    handleTextFieldChange = (field) => (event) => {
        const validationErrors = validateRegisterForm({[field]: event.target.value})

        store.dispatch(updateField({field, value: event.target.value}))
        store.dispatch(updateError({field, value: validationErrors[field]}))
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            this.register()
        }
    }

    register = () => {
        const { values } = this.props.form

        const validationErrors = validateRegisterForm(values)

        if(hasAnyErrors(validationErrors)) {
            store.dispatch(updateErrors(validationErrors))
        } else {
            store.dispatch(register(values))
        }
    }

    handlePasswordToggle = () => {
        store.dispatch(togglePasswordVisibility())
    }

    render() {
        const { values, errors, $register } = this.props.form

        return (
            <div onKeyPress={this.handleKeyPress}>
                <Row class={formRowPadding}>
                    <Col md={{size: 1, offset: 1}}>
                        <Icon icon={classNames('fa fa-envelope-o', inputIcon)} />
                    </Col>
                    <Col md={9}>
                        <TextField class={textFieldFull}
                                    name="email"
                                    hintText="Email"
                                    errorText={errors.email}
                                    value={values.email}
                                    onChange={this.handleTextFieldChange('email')}
                        />
                    </Col>
                </Row>
                <Row class={formRowPadding}>
                    <Col md={{size: 1, offset: 1}}>
                        <Icon icon={classNames('fa fa-user-o', inputIcon)} />
                    </Col>
                    <Col md={9}>
                        <TextField class={textFieldFull}
                                    name="username"
                                    hintText="Username"
                                    errorText={errors.username}
                                    value={values.username}
                                    onChange={this.handleTextFieldChange('username')}
                        />
                    </Col>
                </Row>
                <Row class={formRowPadding}>
                    <Col md={{size: 1, offset: 1}}>
                        <Icon icon={classNames('fa fa-key', inputIcon)} />
                    </Col>
                    <Col md={8}>
                        <TextField class={textFieldFull}
                                    name="password"
                                    hintText="Password"
                                    errorText={errors.password}
                                    value={values.password}
                                    onChange={this.handleTextFieldChange('password')}
                                    type={values.passwordVisible ? 'text': 'password'}
                        />
                    </Col>
                    <ToggledIconButton iconOn="fa fa-eye-slash"
                                        iconOff="fa fa-eye"
                                        onToggle={this.handlePasswordToggle}
                                        tooltipOn="Hide password"
                                        tooltipOff="Show password"
                                        style={{marginLeft: -10}}
                                        toggled={values.passwordVisible}
                    />
                </Row>
                <PlayButton apiCallStatus={$register.status} onClick={this.register}/><br/>
                <h6 class={errorText}>{$register.error}</h6>
            </div>
        )
    }
}

export default LandingPageAuthSidebarRegister
