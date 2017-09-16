import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { any, values } from 'ramda'
import Username from 'components/partials/RegisterForm/Username'
import Password from 'components/partials/RegisterForm/Password'
import Email from 'components/partials/RegisterForm/Email'
import Button from 'components/shared/Button'
import validateRegisterForm from 'utils/validateRegisterForm'
import * as actions from 'store/modules/registerForm'
import * as loginActions from 'store/modules/loginForm'
import * as stateActions from 'store/modules/state'
import FlexContainer from 'style/FlexContainer'

const Container = FlexContainer.extend`
    flex-direction: column;
    width: 100%;
`

const FormContainer = FlexContainer.extend`
    flex-direction: column;
    justify-content: center;
`

const Title = styled.div`
    text-align: center;
    font-size: 30px;
`

const Field = FlexContainer.extend`
    flex: 1;
    align-self: center;
    width: 60%;
    padding-bottom: 10px;
`

const SubmitButtonContainer = Field.extend`
    padding-top: 20px;
    width: 20%;
`

const OtherActionsContainer = Field.extend`
justify-content: space-between;
`

const SignIn = styled.div`
    flex: 1;
    cursor: pointer;
`

const ForgotPassword = styled.div`
    flex: 1;
    text-align: right;
    cursor: pointer;
`

const register = (dispatch, formValues) => () => {
    const validation = validateRegisterForm(formValues)

    if (any(Boolean, values(validation))) {
        return dispatch(actions.updateErrors(validation))
    }

    return dispatch(actions.register(formValues)).then(() =>
        dispatch(loginActions.login({key: formValues.username, password: formValues.password}))
    ).then(() => 
        dispatch(stateActions.getCurrentUser())
    )
}

const RegisterForm = ({ dispatch, form }) =>
    <Container>
        <Title>Join now!</Title>
        <FormContainer>
            <Field><Username /></Field>
            <Field><Email /></Field>
            <Field><Password /></Field>
            <OtherActionsContainer>
                <SignIn>
                    Sign In
                </SignIn>
                <ForgotPassword>
                    Forgot password?
                </ForgotPassword>
            </OtherActionsContainer>
            <SubmitButtonContainer>
                <Button onClick={register(dispatch, form.values)}>Sign Up</Button>
            </SubmitButtonContainer>
        </FormContainer>
    </Container>

export default connect(store => ({
    form: store.registerForm
}))(RegisterForm)