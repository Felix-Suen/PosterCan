const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PosterSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    images: {
        type: [String],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users',
            },
        },
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users',
            },
            text: {
                type: String,
                required: true,
            },
            name: {
                type: String,
            },
            avatar: {
                type: String,
            },
            date: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Poster = mongoose.model('poster', PosterSchema);
