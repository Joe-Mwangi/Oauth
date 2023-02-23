

function googleSignin(req, res) {

}

function googleCallback(req, res) {
    console.log('Google called us back')
}

function logout(req, res) {

}

module.exports = {
    googleCallback, 
    googleSignin,
    logout
}