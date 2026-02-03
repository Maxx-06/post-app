const mongoose = require('mongoose')
async function connectDB() {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB is connected✅")
}

module.exports = connectDB;