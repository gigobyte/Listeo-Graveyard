import React from 'react'
import styled from 'styled-components'
import Username from './Username'
import Password from './Password'
import Email from './Email'
import Button from '../../shared/Button'
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

const RegisterForm = () =>
    <Container>
        <Title>Join now!</Title>
        <FormContainer>
            <Field><Username /></Field>
            <Field><Email /></Field>
            <Field><Password /></Field>
            <ForgotPassword>Forgot password?</ForgotPassword>
            <SubmitButtonContainer><Button>Sign Up</Button></SubmitButtonContainer>
        </FormContainer>
    </Container>

export default RegisterForm