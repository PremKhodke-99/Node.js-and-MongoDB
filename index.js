const express = require('express');

const { getAllCurrencies, getCurrencyBySymbol } = require('./controller/currencies.controller');
const { getAllUsers, getUserByUuid, getUserByGenderAndAge } = require('./controller/users.controller')


const app = express();
const PORT = 8082;

app.get('/', (req, res) => {
    res.send('<h1>Currency Database</h1>')
})

app.get('/currencies', getAllCurrencies);
app.get('/currencies/:symbol', getCurrencyBySymbol)

app.get('/users', getAllUsers)
app.get('/users/search', getUserByGenderAndAge)
app.get('/users/:uuid', getUserByUuid)

app.listen(PORT, () => {
    console.log('Listening at', PORT);
})



// const server = http.createServer((req, res) => {

//     switch (url) {
//         case '/': {
//             res.writeHead(201, { 'Content-type': "text/html" });
//             res.write('<h1>Currency Database</h1>');
//             res.end();
//             break;
//         }
//         case '/currencies': {
//             res.writeHead(200, { 'Content-type': "application/json" });
//             res.write(JSON.stringify(data));
//             res.end();
//             break;
//         }
//         default : {
//             res.writeHead(400);
//             res.end();
//         }
//     }

// });

// server.listen(PORT, () => {
//     console.log('Listening', PORT);
// })
