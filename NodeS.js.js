var http =require("http");
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(3030);
console.log('server running at http://localhost:7000/');