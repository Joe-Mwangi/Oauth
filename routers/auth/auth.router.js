const express = require('express')
const {
    googleCallback,
    googleSignin,
    logout
} = require('./auth.controller')
const {
    passportAuthenticate,
    passportScope
} = require('../../middleware/passport')

const authRouter = express.Router()

authRouter.route('/auth/google').get(passportScope)
authRouter.route('/auth/google/callback').get(passportAuthenticate, googleCallback)
authRouter.route('/auth/logout').get(logout)

module.exports = authRouter