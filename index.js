const express = require('express');
const { data } = require('./data.json');

const app = express();
const PORT = 8082;

app.get('/', (req, res) => {
    res.send('<h1>Currency Database</h1>')
})

app.get('/currencies', (req, res) => {
    let { min_value } = req.query;
    // console.log(min_value)
    if(min_value){
        const result = data.filter((item) => Number(item.min_size) === Number(min_value));
        res.json(result);
    }else{
        res.json(data);
    }
})

app.get('/currencies/:symbol', (req, res) => {
    const { symbol } = req.params;

    const result = data.find((item) => item.id.toLowerCase() === symbol.toLowerCase());
    console.log(result);
    
    if (result) {
        res.json(result);
    } else {
        res.sendStatus(404)
    }
})

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
