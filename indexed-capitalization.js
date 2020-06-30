// server eklendi
var str = "abcdef";
var http = require('http');

function toUpper(str){
    return str[0] + str[1].toUpperCase() + str[2].toUpperCase() + str[3] + str[4] + str[5].toUpperCase()
}
console.log(toUpper(str))

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(toUpper(str));
  }).listen(8000);

