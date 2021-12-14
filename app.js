const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Baic code</title></head>');
    res.write('<body><h1>Hello guyes this my first server</h1></body>');
    res.write('</html>');
    res.end();
})

server.listen(3000);