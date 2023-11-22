//Create Web Server
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Ola from the other side");
});

server.listen(8000, 'localhost', () => {    //localhost is the default value
    console.log("Listening to the port no 8000");
});