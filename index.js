const http = require('http');

//Definir un servidor
const header= function(req,res){
   res.writeHead(200,{'content-type':'text/html'});
   res.write('<h1>Hola mundo</h1>');
   res.write('<h2>Esta es una prueba de conexion http con nodejs</h2>');
   res.end;
}
const Server =http.createServer(header);
Server.listen(3000);
console.log('Server on port 3000');
console.log('En buena hora servidor web');
