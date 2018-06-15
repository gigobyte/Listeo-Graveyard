import Playlist from '../models/playlist'

export function create(req, res) {
    const playlist = new Playlist({...req.body, createdAt: new Date()})

    playlist.save()
    .then(() => {
        req.user.playlists.push(playlist._id)
        return req.user.save()
    })
    .then(() => res.status(200).send(req.user))
    .catch((err) => {
        if(err.name === 'ValidationError') {
            return res.status(400).send()
        }

        if(err.name === 'MongoError') {
            return res.status(200).send({error: err})
        }

        res.status(500).send()
    })
}
