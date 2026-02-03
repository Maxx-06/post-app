const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    Caption: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    }
})

const postModel = mongoose.model('post', postSchema)

module.exports = postModel