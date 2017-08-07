const nonEmpty = v => v ? '' : 'This field is required'

const validateUsername = username => pipe(nonEmpty)

const validateRegisterForm = form => ({
    username: validateUsername(form.username)
})

export default validateRegisterForm