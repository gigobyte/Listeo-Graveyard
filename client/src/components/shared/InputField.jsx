import React from 'react'
import styled from 'styled-components'
import { T, F } from 'ramda'
import { withState } from 'recompose'

const Input = styled.input`
    padding: 0px;
    position: relative;
    width: 100%;
    border: medium none;
    outline: medium none;
    background-color: rgba(0, 0, 0, 0);
    color: rgba(256, 256, 256, 0.87);
    cursor: inherit;
    font: inherit;
    height: 100%;
`

const Wrapper = styled.div`
    font-size: 16px;
    line-height: 24px;
    height: 48px;
    display: inline-block;
    position: relative;
    background-color: transparent;
    width: 100%;
`

const Border = styled.hr`
    border-width: medium medium 1px;
    border-style: none none solid;
    border-color: rgba(256, 256, 256, 0.3);
    bottom: 8px;
    box-sizing: content-box;
    margin: 0px;
    position: absolute;
    width: 100%;
`

const Placeholder = styled.div`
    position: absolute;
    opacity: ${props => props.show ? 1 : 0};
    color: rgba(256, 256, 256, 0.87);
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    bottom: 12px;
`

const BorderFocused = styled.div`
    border-width: medium medium 2px;
    border-style: none none solid;
    border-color: ${props => props.hasError ? 'rgb(244, 67, 54)' : '#252e45'};
    bottom: 8px;
    box-sizing: content-box;
    margin: 0px;
    position: absolute;
    width: 100%;
    transform: scaleX(${props => props.show || props.hasError ? 1 : 0});
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
`

const Error = styled.div`
    position: relative;
    bottom: 2px;
    font-size: 12px;
    line-height: 12px;
    color: rgb(244, 67, 54);
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
`

const InputField = ({type='text', value, onChange, onBlur=T, onFocus=T, placeholder, focused, setFocused, error }) =>
    <Wrapper>
        <Input
            type={type}
            value={value}
            onChange={onChange}
            onBlur={() => (onBlur(), setFocused(F))}
            onFocus={() => (onFocus(), setFocused(T))}
        />
        <div>
            <Placeholder show={!value}>{placeholder}</Placeholder>
            <Border />
            <BorderFocused show={focused} hasError={error} />
            {error && <Error>{error}</Error>}
        </div>
    </Wrapper>

export default withState('focused', 'setFocused', false)(InputField)