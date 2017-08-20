import { pick } from 'ramda'

const me = (req, res) => {
    const user = pick(['username', 'isPremium', 'createdAt', 'email'], req.user)
    res.status(200).send(user)
}

export default me