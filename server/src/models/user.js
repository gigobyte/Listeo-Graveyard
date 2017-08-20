import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'

const USERNAME_REGEX = /^[a-zA-Z0-9]{3,}$/
const PASSWORD_REGEX = /^.{6,}$/

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true, match: USERNAME_REGEX},
    password: {type: String, required: true, match: PASSWORD_REGEX},
    createdAt: {type: Date, default: Date.now()},
    isPremium: {type: Boolean, default: false}
})

UserSchema.pre('save', function(next) {
    if(!this.isNew) {
        return next()
    }

    bcrypt.hash(this.password, bcrypt.genSaltSync(10), null, (err, hash) => {
        if (err) {
            return next(err)
        }

        this.password = hash
        next()
    })
})

export default mongoose.model('User', UserSchema)