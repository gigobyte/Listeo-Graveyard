import React from 'react'
import { css } from 'styled-components'
import InputField from '../../shared/InputField'
import createRegisterFormField from './createRegisterFormField'

const iconStyle = css`
    left: -32px;
`

const Email = ({ value, error, updateField, validateField }) =>
    <InputField
        placeholder="Email"
        value={value}
        onChange={updateField}
        onBlur={validateField}
        error={error}
        leftIcon="fa-envelope-o"
        leftIconStyle={iconStyle}
    />

export default createRegisterFormField('email', Email)