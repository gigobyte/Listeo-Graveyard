import React from 'react'
import InputField from '../../shared/InputField'
import createRegisterFormField from './createRegisterFormField'

const Password = ({ value, error, updateField, validateField }) =>
    <InputField type="password" placeholder="Password" value={value} onChange={updateField} onBlur={validateField} error={error} />

export default createRegisterFormField('password', Password)