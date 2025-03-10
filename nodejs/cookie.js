var http = require('http');
http.createServer(function(request, response){
    // response.writeHead(200, {
    //     'set-cookie': [
    //         'yummy_cookie=choco',
    //         'tasty_cookie=strawberry',
    //     ]
    // });
    response.end('Cookie!!');
}).listen(3000);