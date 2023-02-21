require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const infoRouter = require('./routers/info/info.router')
const authRouter = require('./routers/auth/auth.router')
const passport = require('passport')

const app = express()

const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET
}
//use helmet before all middlewares
app.use(helmet())

app.use(infoRouter)
app.use('/auth' ,authRouter)

module.exports = app