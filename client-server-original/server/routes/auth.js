import User from '../models/user'
import bcrypt from 'bcrypt-nodejs'
import jwt from 'jsonwebtoken'
import * as errors from '../errors'

export function register(req, res) {
    const user = new User(req.body)

    user.save()
    .then(() => res.status(200).send())
    .catch((err) => {
        if(err.name === 'ValidationError') {
            return res.status(400).send()
        }

        if(err.name === 'MongoError') {
            return res.status(200).send({error: errors.USER_ALREADY_EXISTS})
        }
    })
}

export function login(req, res) {
    const { username, password } = req.body

    User.findOne({username})
    .then((user) => {
        if(!user) {
            return res.status(200).send({error: errors.USER_NOT_FOUND})
        }

        if(bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({_id: user._id}, process.env.LISTEO_JWT_SECRET)
            return res.status(200).send(token)
        }

        return res.status(200).send({error: errors.USER_NOT_FOUND})
    }).catch(() => {
        return res.status(500).send()
    })
}

export function user(req, res) {
    res.status(200).send(req.publicUser)
}
