import React from 'react'
import InputField from '../../shared/InputField'
import createRegisterFormField from './createRegisterFormField'
import * as actions from '../../../store/modules/registerForm'
import createFormField from '../../../utils/createFormField'
import validateRegisterForm from '../../../utils/validateRegisterForm'

const Username = ({ value, updateField }) =>
    <InputField value={value} onChange={updateField} />

export default createRegisterFormField('username', Username)