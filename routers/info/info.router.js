const express = require('express')
const {
    homepage,
    getSecret
} = require('./info.controller')
const auth = require('../../middleware/authenticate')

const infoRouter = express.Router()

infoRouter.route('/').get(homepage)
infoRouter.route('/secret').get(auth, getSecret)

module.exports = infoRouter

