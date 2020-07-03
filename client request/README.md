# 클라이언트 요청

## GET
이번 시간에서는 클라이언트 요청 처리중에 GET 에 대하여 알아보겠습니다. <br>
GET 은 주소값을 이용해 요청을 하는 방식입니다. <br>
서버로 값을 전달하기위해```localhost:8080/?var=hell&int=12323``` <br>
이런식으로 사용합니다. ? 다음의 수들을 서버에서 받아오는 것이죠. 두개 이상인 수는 & 로 연결해주면 됩니다. <br>

``` js
var http = require('http');
var url = require('url');
var querystring = require('querystring'); 

var server = http.createServer(function(request,response){
    console.log('--- log start ---');

    var parsedUrl = url.parse(request.url);
    console.log(parsedUrl);

    var parsedQuery = querystring.parse(parsedUrl.query,'&','=');
    console.log(parsedQuery);

    console.log('--- log end ---');

    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('Hello node.js!!');
});

server.listen(8080, function(){
    console.log('Server is running...');
});
```

이 코드를 실행해 접속해 보면 <br>
