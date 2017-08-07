import React from 'react'
import styled from 'styled-components'
import Username from './Username'
import FlexContainer from '../../../style/FlexContainer'

const Container = FlexContainer.extend`
    flex-direction: column;
    width: 100%;
`

const Title = styled.div`
    text-align: center;
    font-size: 30px;
`

const RegisterForm = () =>
    <Container>
        <Title>Join now!</Title>
        <Username />
    </Container>

export default RegisterForm