var http = require('http');
var url = require('url');
var querystring = require('querystring'); 

var server = http.createServer(function(request,response){
    console.log('--- log start ---');

    var parsedUrl = url.parse(request.url);
    console.log(parsedUrl);

    var parsedQuery = querystring.parse(parsedUrl.query,'&','=');
    console.log(parsedQuery.name);

    console.log('--- log end ---');

    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    response.end(`${parsedQuery.name} 천재`);
});

server.listen(8080, function(){
    console.log('Server is running...');
});