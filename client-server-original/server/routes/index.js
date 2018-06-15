import * as auth from './auth'
import * as playlist from './playlist'
import path from 'path'

export default function initializeRouting(app) {
    app.get('*.js', (req, res, next) => {
        if(process.env.NODE_ENV === 'production') {
            req.url = req.url + '.gz'
            res.set('Content-Encoding', 'gzip')
        }

        next()
    })
    app.post('/api/auth/register', auth.register)
    app.post('/api/auth/login', auth.login)
    app.get('/api/auth/user', auth.user)
    app.post('/api/playlist', playlist.create)
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', '..', 'client-dist', 'index.html'))
    })
}
