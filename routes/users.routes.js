const {
    getAllUsers,
    getUserByUuid,
    getUserByGenderAndAge
} = require('../controller/users.controller');
const router = require('express').Router();

const { validateSearchQuery } = require('../middleware/validators/users.validators')

router.get('/', getAllUsers);
router.get('/search', validateSearchQuery, getUserByGenderAndAge);
router.get('/:uuid', getUserByUuid);

module.exports = router;