require('dotenv').config();
const express = require('express');

const currencyRoutes = require('./routes/currencies.routes');
const userRoutes = require('./routes/users.routes');
const blogRoutes = require('./routes/blogs.routes');

const { verifyAuth } = require('./middleware/verifyAuth')
const mongoose = require('mongoose');

const DB_URI = "mongodb://localhost:27017/website"
mongoose.connect(`${DB_URI}`)
    .then(() => console.log('Connected to DB at', DB_URI))
    .catch((e) => console.log('Failde to connect DB', e));
const app = express();
const PORT = 8082;

// app.use(verifyAuth);
app.use(express.json())
app.use('/currencies', currencyRoutes);
app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);

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
