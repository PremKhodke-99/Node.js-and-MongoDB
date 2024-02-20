const http = require('http');
const { data } = require('./data.json');

const PORT = 8082;

const server = http.createServer((req, res) => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString()
    console.log(`Date ${date} Time ${time}`);

    const serverInfo = {
        serverName: 'Crio Server',
        version: '1.0.0',
        currentDate: date,
        currentTime: time
    }
    const url = req.url;
    // if (url === '/status') {
    //     res.writeHead(201, { 'Content-type': "application/json" });
    //     res.write(JSON.stringify(serverInfo))
    //     res.end()
    // } else {
    //     res.writeHead(201, { 'Content-type': "text/html" });
    //     res.write('<h1>NODE.js</h1>');
    //     res.end()
    // }

    switch (url) {
        case '/': {
            res.writeHead(201, { 'Content-type': "text/html" });
            res.write('<h1>Currency Database</h1>');
            res.end();
            break;
        }
        case '/currencies': {
            res.writeHead(200, { 'Content-type': "application/json" });
            res.write(JSON.stringify(data));
            res.end();
            break;
        }
        default : {
            res.writeHead(400);
            res.end();
        }
    }

});

server.listen(PORT, () => {
    console.log('Listening', PORT);
})
