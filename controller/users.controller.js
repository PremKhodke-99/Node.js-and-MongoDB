const { data } = require('../users.json');
const getQueryErrors = require('../validators/users.validators');

const getAllUsers = (req, res) => {
    res.json(data);
}

const getUserByUuid = (req, res) => {
    const { uuid } = req.params;
    console.log(uuid)
    const result = data.find((item) => item.login.uuid === uuid);

    if (result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }
}


const getUserByGenderAndAge = (req, res) => {
    const { gender, age } = req.query;
    console.log(gender, age);
    const error = getQueryErrors({ age, gender })

    if(error){
        res.status(422).json(error);
    }

    if (gender && age) {
        const results = data.filter((item) => item.gender === gender && Number(item.dob.age) >= Number(age));
        res.json(results);
    } else if (gender) {
        const results = data.filter((item) => item.gender === gender);
        res.json(results);
    } else if (age) {
        const results = data.filter((item) => Number(item.dob.age) >= Number(age));
        res.json(results);
    } else {
        res.status(422).json({ message: 'Missing Search Parameters, search using age and/or gender' });
    }
}

module.exports = {
    getAllUsers,
    getUserByUuid,
    getUserByGenderAndAge
}