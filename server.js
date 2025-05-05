const http = require('http');
const port = 3021;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    res.statusCode = 201;
    res.end('Node server created by Shubham Rai');
});

server.listen(port, () => {
    console.log(`Server running at http://${HOSTNAME}:${port}`);
});
