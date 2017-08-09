import React from 'react'
import InputField from '../../shared/InputField'
import createRegisterFormField from './createRegisterFormField'

const Username = ({ value, updateField, validateField }) =>
    <InputField placeholder="Username" value={value} onChange={updateField} onBlur={validateField} />

export default createRegisterFormField('username', Username)