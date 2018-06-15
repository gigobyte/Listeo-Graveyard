import mongoose from 'mongoose'

const PlaylistSchema = new mongoose.Schema({
    title: {type: String, minlength: 2, maxlength: 30, required: true},
    description: {type: String, maxlength: 140},
    tags: {type: [String]},
    private: {type: Boolean, required: true},
    createdAt: {type: Date},
    updatedAt: {type: Date}
})

export default mongoose.model('Playlist', PlaylistSchema)
