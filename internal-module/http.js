//import model
const http = require('http')
const port = 3000

// create server
http.createServer((req, res) => {
    res.write( 'Modulo http');
    res.end();
}).listen(8080)

