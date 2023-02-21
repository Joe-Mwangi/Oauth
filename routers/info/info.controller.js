const path = require('path')

function homepage(req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
}

function getSecret(req, res) {
    res.send('Your secret is 43')
}

module.exports = {
    homepage,
    getSecret
}