const fs = require('fs')
const https = require('https')
const app = require('./app')

const port = 5000
https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
},app).listen(port, () =>
 console.log('Server listening to port 5000...')
 )