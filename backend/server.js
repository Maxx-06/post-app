require('dotenv').config()
const connectDB = require('./src/db/db')
const app = require('./src/app')
const PORT = 5000;


connectDB()
app.listen(PORT, () => {
    console.log("Server is running at http://localhost:3000")
})