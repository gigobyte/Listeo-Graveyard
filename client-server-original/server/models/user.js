import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'

const USERNAME_REGEX = /^[a-zA-Z0-9]{3,}$/
const PASSWORD_REGEX = /^.{6,}$/

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true, match: USERNAME_REGEX},
    password: {type: String, required: true, match: PASSWORD_REGEX},
    firstname: {type: String},
    lastname: {type: String},
    isPremium: {type: Boolean, default: false},
    playlists: {type: [mongoose.Schema.Types.ObjectId], default: []}
})

UserSchema.pre('save', function(next) {
    const user = this

    if(!user.isNew) {
        return next()
    }

    const salt = bcrypt.genSaltSync(10)

    bcrypt.hash(user.password, salt, null, (err, hash) => {
        if (err) {
            return next(err)
        }

        user.password = hash
        next()
    })
})

export default mongoose.model('User', UserSchema)
