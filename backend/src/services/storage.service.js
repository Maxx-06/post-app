const { ImageKit } = require('@imagekit/nodejs')

const client = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function fileUpload(buffer, fName) {

    const response = await client.files.upload({
        file: buffer.toString('base64'),
        fileName: fName,
    });

    return response
}

module.exports = fileUpload