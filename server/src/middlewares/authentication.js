import passport from 'passport'
import jwt from 'passport-jwt'
import { JWT_SECRET } from '../secrets'
import User from '../models/user'

passport.use(new jwt.Strategy({
    jwtFromRequest: jwt.ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    User.findById(payload.sub)
        .then((user) => {
            if (!user) {
                return done(null, false)
            }

            return done(null, user)
        })
        .catch((err) => done(err, false))
}))