const express = require('express')
const helmet = require('helmet')
const infoRouter = require('./routers/info/info.router')
const authRouter = require('./routers/auth/auth.router')

const app = express()

//use helmet before all middlewares
app.use(helmet())

app.use(infoRouter)
app.use('/auth' ,authRouter)

module.exports = app