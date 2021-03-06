import React from 'react'
import { withState } from 'recompose'
import InputField from 'components/shared/InputField'
import createRegisterFormField from 'components/partials/RegisterForm/createRegisterFormField'

const attachRevealPassword = withState('passwordRevealed', 'revealPassword', false)

const Password = ({ value, error, updateField, validateField, passwordRevealed, revealPassword }) =>
    <InputField
        type={passwordRevealed ? 'text' : 'password'}
        placeholder="Password"
        value={value}
        onChange={updateField}
        onBlur={validateField}
        error={error}
        rightIcon={passwordRevealed ? 'fa-eye-slash' : 'fa-eye'}
        leftIcon="fa-key"
        onRightIconClick={() => revealPassword((x => !x))}
    />

export default attachRevealPassword(createRegisterFormField('password', Password))