import User from '../../models/user'
import ERRORS from '../../utils/errors'

const register = (req, res, next) => {
    const user = new User(req.body)
    
    user.save()
        .then(() => res.status(200).send())
        .catch(handleError(res))
}

const handleError = res => err => {
    if (err.name === 'ValidationError') {
        return res.status(400).send({code: ERRORS.VALIDATION_ERROR, devMessage: err.message})
    }

    if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(400).send({code: ERRORS.USER_ALREADY_EXISTS, devMessage: err.message})
    }

    return res.status(500).send({code: ERRORS.SERVER_ERROR, devMessage: err.message})
}

export default register