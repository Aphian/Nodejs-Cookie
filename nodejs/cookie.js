var http = require('http');
var cookie = require('cookie');
http.createServer(function(request, response){
    // cookie read
    console.log(request.headers.cookie)

    var coookies = {};
    // cookie 가 없을 경우 제외
    if (request.headers.cookie !== undefined) {
        // 객체로 반환
        var coookies = cookie.parse(request.headers.cookie);
    }    
    console.log(coookies.yummy_cookie);

    response.writeHead(200, {
        'set-cookie': [
            'yummy_cookie=choco',
            'tasty_cookie=strawberry',
            `Permanet=cookies; Max-Age=${60*60*24*30}`,
            'Secure=Secure;, Secure',
            'HttpOnly=HttpOnly; HttpOnly',
        ]
    });
    response.end('Cookie!!');
}).listen(3000);