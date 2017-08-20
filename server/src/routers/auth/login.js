import User from '../../models/user'
import ERRORS from '../../utils/errors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt-nodejs'
import { JWT_SECRET } from '../../secrets'

const login = async (req, res, next) => {
    const { key, password } = req.body

    User.findOne({$or: [{username: key}, {email: key}]})
        .then((user) => {
            if(!user) {
                return res.status(401).send({code: ERRORS.USER_NOT_FOUND})
            }

            if(bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign({
                    iss: 'listeo',
                    sub: user.id,
                    iat: Date.now(),
                    exp: new Date().setDate(new Date().getDate() + 30)
                }, JWT_SECRET)

                return res.status(200).send({token})
            }

            return res.status(401).send({code: ERRORS.USER_NOT_FOUND})
        })
        .catch((err) => res.status(500).send({code: ERRORS.SERVER_ERROR, devMessage: err.message}))
}

export default login