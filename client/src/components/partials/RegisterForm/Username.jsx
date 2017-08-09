import React from 'react'
import InputField from '../../shared/InputField'
import createRegisterFormField from './createRegisterFormField'

const Username = ({ value, error, updateField, validateField }) =>
    <InputField placeholder="Username" value={value} onChange={updateField} onBlur={validateField} error={error} />

export default createRegisterFormField('username', Username)