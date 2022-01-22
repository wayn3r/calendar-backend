const express = require('express')
require('dotenv').config()

const authRouter = require('./auth/routes')

const app = express()
app.use(express.json())
// Routes
app.use('/auth', authRouter)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})