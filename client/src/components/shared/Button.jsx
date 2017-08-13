import React from 'react'
import styled from 'styled-components'

const ButtonWithRadius = styled.button`
    box-sizing: content-box;
    border-radius: 15px;
    height: 30px;
    background-color: transparent;
    border: 1px solid rgba(256, 256, 256, 0.87);
    color: white;
    width: 100%;
    padding: 3px;

    &:focus {
        outline: none;
    }
`

const Button = ({ onClick, children }) =>
    <ButtonWithRadius onClick={onClick}>
        {children}
    </ButtonWithRadius>

export default Button;