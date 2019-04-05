var http = require('http');
var os = require("os");
var hostname = os.hostname();
//loads http module
var app=http.createServer(function (req, res) {
//creates server
  res.writeHead(200, {'Content-Type': 'text/html'});
  //sets the right header and status code
  res.end('<h1>Hello World -- host-'+hostname+'</h1>');
  //outputs string with line end symbol
}).listen(8000, "0.0.0.0");
//sets port and IP address of the server
console.log('Server running on port 8000');

