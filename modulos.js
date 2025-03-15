// Criando seus próprios módulos
exports.dataHora = (function () {
    return Date();
} ());
console.log(this.dataHora);

var http = require('http');
var data = this.dataHora;
http.createServer(function (req, res) { //Acessando o modulo HTTP
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data);    
}).listen(3001);