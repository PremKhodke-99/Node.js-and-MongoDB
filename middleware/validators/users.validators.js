const Joi = require('joi');

const schema = Joi.object().keys({
    age: Joi.number().integer().min(0).max(100),
    gender: Joi.string().valid('male', 'female'),
})

// const getQueryErrors = (data) => {
//     const result = schema.validate(data);
//     return result.error
// }

const validateSearchQuery = (req, res, next) => {
    const { gender, age } = req.query;
    const { error } = schema.validate({ gender, age });
    if (error) {
        return res.status(422).json(error);
    }
    next();
}

module.exports = {
    validateSearchQuery
}