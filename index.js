const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')

const routes = require('./routes/routes')

dotenv.config()

const mongoUrl = process.env.DB_URL
mongoose.connect(mongoUrl)
const db = mongoose.connection

db.once('connected', () => {
    console.log('Database Connected')
})

db.on('error', (error) => {
    console.log(error)
})

app.use(express.json())
app.use(cors({
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}))

app.use('/api', routes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
