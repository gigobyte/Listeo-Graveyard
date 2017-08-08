import React from 'react'
import InputField from '../../shared/InputField'
import createRegisterFormField from './createRegisterFormField'

const Username = ({ value, updateField }) =>
    <InputField value={value} onChange={updateField} />

export default createRegisterFormField('username', Username)