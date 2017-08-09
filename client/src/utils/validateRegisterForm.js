import { validate, required, pattern, minlenght, includes } from './validationUtils'

const validateRegisterForm = form => ({
    username: validate(form.username, [
        [required, 'Username is required'],
        [pattern(/^.{6,}$/), 'Username should not contain special characters and must be at least 3 characters long']
    ]),
    password: validate(form.password, [
        [required, 'Password is required'],
        [minlenght(6), 'Passwords should be at least 6 characters long']
    ]),
    email: validate(form.email, [
        [required, 'Email is required'],
        [includes('@'), 'Invalid email']
    ])
})

export default validateRegisterForm
