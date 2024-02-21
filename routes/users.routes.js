const { 
    getAllUsers, 
    getUserByUuid, 
    getUserByGenderAndAge 
} = require('../controller/users.controller');
const router = require('express').Router();

router.get('/', getAllUsers);
router.get('/search', getUserByGenderAndAge);
router.get('/:uuid', getUserByUuid);

module.exports = router;