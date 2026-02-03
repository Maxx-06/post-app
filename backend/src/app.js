const express = require('express')
const postModel = require('./models/post.model')
const multer = require('multer')
const fileUpload = require('./services/storage.service')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())

const upload = multer({
    storage: multer.memoryStorage()
})

app.post('/create-post', upload.single('image'), async (req, res) => {
    const image = await fileUpload(req.file.buffer, req.file.originalname)
    const post = await postModel.create({
        Image: image.url,
        Caption: req.body.caption
    })

    res.status(201).json({
        message: "Post created successfully",
        post
    })
})

app.get('/posts', async (req, res) => {
    const allPost = await postModel.find()
    res.status(200).json({
        message: 'All post fetched successfully',
        allPost
    })
})


module.exports = app