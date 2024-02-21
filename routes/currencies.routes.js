const {
    getAllCurrencies,
    getCurrencyBySymbol
} = require('../controller/currencies.controller');
const router = require('express').Router()

router.get('/', getAllCurrencies);
router.get('/:symbol', getCurrencyBySymbol);

module.exports = router