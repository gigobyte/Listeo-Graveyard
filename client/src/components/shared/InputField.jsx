import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    background-color: transparent;
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid white;
`

const InputField = (props) =>
    <Input type="text" {...props} />

export default InputField