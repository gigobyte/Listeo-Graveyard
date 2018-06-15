export function validateLoginForm({username, password}) {
    return {
        username: validateRequired(username),
        password: validateRequired(password)
    }
}

export function validateRegisterForm({username, password, email}) {
    return {
        username: validateUsername(username),
        password: validatePassword(password),
        email: validateEmail(email)
    }
}

export function validateNewPlaylistForm({title, thumbnail}) {
    return {
        title: validateRequired(title),
        thumbnail: validateThumbnail(thumbnail)
    }
}

export function hasAnyErrors(validationErrors) {
    return Object.values(validationErrors).some((e) => !!e)
}

//===================================================

export function validateRequired(value) {
    if(!value) {
        return 'This field is required'
    }
}

export function validateUsername(value) {
    const USERNAME_REGEX = /^[a-zA-Z0-9]{3,}$/

    if(!value) {
        return 'This field is required'
    }

    if(!USERNAME_REGEX.test(value)) {
        return 'Usernames should not contain special characters and must be at least 3 characters long'
    }
}

export function validatePassword(value) {
    const PASSWORD_REGEX = /^.{6,}$/

    if(!value) {
        return 'This field is required'
    }

    if(!PASSWORD_REGEX.test(value)) {
        return 'Passwords should be at least 6 characters long'
    }
}

export function validateEmail(value) {
    if(!value) {
        return 'This field is required'
    }

    if(!value.includes('@')) {
        return 'Invalid email'
    }
}

export function validateThumbnail(file) {
    if(!file.type.includes('image/')) {
        return 'Invalid file type'
    }

    if(file.size > 1000000) {
        return 'File is too big'
    }
}
