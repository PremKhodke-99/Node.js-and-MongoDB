const verifyAuth = (req, res, next) => {
    const PASSWORD = process.env.ROUTE_PASSWORD
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(403).json({ message: 'Unauthorized Request' });
    }
    if (authorization !== PASSWORD) {
        return res.status(403).json({ message: 'Unauthorized Request' });
    }
    next()
}

module.exports = {
    verifyAuth
}