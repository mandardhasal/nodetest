var http = require('http');
var os = require("os");
var hostname = os.hostname();
//loads http module
var app=http.createServer(function (req, res) {
//creates server
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //sets the right header and status code
  res.end('Hello World -- host-'+hostname);
  //outputs string with line end symbol
}).listen(80, "0.0.0.0");
//sets port and IP address of the server
console.log('Server running on port 80');

