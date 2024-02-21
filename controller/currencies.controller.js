const { data } = require('../data.json');


const getAllCurrencies = (req, res) => {
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