const fs = require('fs')
const path = require('path')
const https = require('https')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/secret', (req, res) => {
    res.send('Your secret is 43')
})

const port = 5000
https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
},app).listen(port, () =>
 console.log('Server listening to port 5000...')
 )