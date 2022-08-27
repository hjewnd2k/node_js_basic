const http = require('http');

const server = http.createServer(function(req, res) {
    console.log("Request runner ...");
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Hello ca nha</h1>")
    res.write("<h2>Welcome to NodeJs</h2>")

    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('Server listening on port 3000');
})