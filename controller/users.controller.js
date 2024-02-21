const { data } = require('../users.json');

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
    console.log(gender, age)
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
        res.sendStatus(404);
    }
}

module.exports = {
    getAllUsers,
    getUserByUuid,
    getUserByGenderAndAge
}