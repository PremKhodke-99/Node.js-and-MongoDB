const { data } = require('../data.json');

const PASSWORD = process.env.ROUTE_PASSWORD

const verifyAuth = (req) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return false;
    }
    if (authorization !== PASSWORD) {
        return false;
    }
    return true;

}

const getAllCurrencies = (req, res) => {
    if (!verifyAuth(req)) {
        res.status(403).json({ message: 'Unauthorized Request' });
        return;
    }
    const { min_value } = req.query;
    console.log(min_value)
    if (min_value) {
        const result = data.filter((item) => Number(item.min_size) === Number(min_value));
        res.json(result);
    } else {
        res.json(data);
    }
}

const getCurrencyBySymbol = (req, res) => {
    const { symbol } = req.params;

    const result = data.find((item) => item.id.toLowerCase() === symbol.toLowerCase());
    console.log(result);

    if (result) {
        res.json(result);
    } else {
        res.sendStatus(404)
    }
}

module.exports = {
    getAllCurrencies,
    getCurrencyBySymbol
}