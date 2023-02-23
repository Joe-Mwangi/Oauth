function checkLoggedIn(req, res, next) {
    const isLoggedIn = true
    if(!isLoggedIn) {
        return res.status(401).json({
            msg: 'You must loggin'
        })
    }
    next()
}

module.exports = checkLoggedIn