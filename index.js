require('dotenv').config();
const express = require('express');

const currencyRoutes = require('./routes/currencies.routes');
const userRoutes = require('./routes/users.routes');

const {verifyAuth} = require('./middleware/verifyAuth')

const app = express();
const PORT = 8082;

app.use(verifyAuth);
app.use('/currencies', currencyRoutes);
app.use('/users', userRoutes);

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
