const express = require('express')
const {
    googleCallback,
    googleSignin,
    logout
} = require('./auth.controller')

const authRouter = express.Router()

authRouter.route('/google').get(googleSignin)
authRouter.route('/google/callback').get(googleCallback)
authRouter.route('/logout').get(logout)

module.exports = authRouter