import jwt from 'jsonwebtoken'
import _ from 'lodash'
import User from '../models/user'

export default function jwtMiddleware(req, res, next) {
    const PUBLIC_API_ROUTES = ['/api/auth/login', '/api/auth/register']
    const authorizationHeader = req.headers.authorization

    if(PUBLIC_API_ROUTES.includes(req.originalUrl) || !req.originalUrl.startsWith('/api')) {
        return next()
    }

    if(!authorizationHeader) {
        return res.status(401).send()
    }

    const token = authorizationHeader.replace('Bearer ', '')

    jwt.verify(token, process.env.LISTEO_JWT_SECRET, (err, user) => {
        if(err) {
            return res.status(401).send()
        }

        User.findOne({_id: user._id}).then((user) => {
            if(!user) {
                return res.status(401).send()
            }

            req.user = user
            req.publicUser = _.pick(user, ['email', 'username', 'isPremium'])
            next()
        })
    })
}
