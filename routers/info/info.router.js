const express = require('express')
const {
    homepage,
    getSecret,
    failedLogin
} = require('./info.controller')
const auth = require('../../middleware/authenticate')

const infoRouter = express.Router()

infoRouter.route('/').get(homepage)
infoRouter.route('/secret').get(auth, getSecret)
infoRouter.route('/failure').get(failedLogin)

module.exports = infoRouter

