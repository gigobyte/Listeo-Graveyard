import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { any, values } from 'ramda'
import Username from './Username'
import Password from './Password'
import Email from './Email'
import Button from '../../shared/Button'
import validateRegisterForm from '../../../utils/validateRegisterForm'
import * as actions from '../../../store/modules/registerForm'
import FlexContainer from '../../../style/FlexContainer'

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

const ForgotPassword = Field.extend`
    justify-content: flex-end;
`

const register = (dispatch, formValues) => () => {
    const validation = validateRegisterForm(formValues)

    if (any(Boolean, values(validation))) {
        return dispatch(actions.updateErrors(validation))
    }

    return dispatch(actions.register(formValues))
}

const RegisterForm = ({ dispatch, form }) =>
    <Container>
        <Title>Join now!</Title>
        <FormContainer>
            <Field><Username /></Field>
            <Field><Email /></Field>
            <Field><Password /></Field>
            <ForgotPassword>Forgot password?</ForgotPassword>
            <SubmitButtonContainer>
                <Button onClick={register(dispatch, form.values)}>Sign Up</Button>
            </SubmitButtonContainer>
        </FormContainer>
    </Container>

export default connect(store => ({
    form: store.registerForm
}))(RegisterForm)