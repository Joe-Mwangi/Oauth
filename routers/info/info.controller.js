const path = require('path')

function homepage(req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
}

function getSecret(req, res) {
    res.send('Your secret is 43')
}

function failedLogin(req, res) {
    return res.send('Failed to log in')
}

module.exports = {
    homepage,
    getSecret,
    failedLogin
}