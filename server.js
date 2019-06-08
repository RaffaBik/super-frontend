'use strict';

const http = require ('http');
const fs = require('fs'); //чтение файла

const server = http.createServer(function (request, response) {
    console.log(request.method, request.url);

    if (request.url=='/style.css'){
        const css = fs.readFileSync('style.css', 'utf8');
        response.end(css);//закрытие запроса
    }
    else {
        const html = fs.readFileSync('index.html', 'utf8');
        response.end(html);//закрытие запроса
    }


});
var port = process.env.port || 3000;
console.log("port = ", port);

server.listen(port); //звпуск сервера
console.log('Server started !');

//если в брауэере набрать localhost:3000 в терминале отобразиться hello
//по фавикону браузер запрашивает иконку сайт