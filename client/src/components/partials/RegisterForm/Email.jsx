import React from 'react'
import InputField from '../../shared/InputField'
import createRegisterFormField from './createRegisterFormField'

const Email = ({ value, error, updateField, validateField }) =>
    <InputField placeholder="Email" value={value} onChange={updateField} onBlur={validateField} error={error} />

export default createRegisterFormField('email', Email)