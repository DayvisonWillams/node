//Escrevendo no terminal via CLI
console.log('helo world');
console.log('O resultado é apresentado no CLI - Command Line Interface');

//Ativando o servidor web
var http = require('http'); // inclua os moduos que serão utilidados aqui

http.createServer(function (req, res){ //Acessando o modulo HTTP e criando o servidor.
    res.writeHead(200, {'Content - Type': 'text/plain'});
    res.end('Hello World! PC Professor!');
}).listen(3000);
