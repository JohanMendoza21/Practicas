const http = require('http');

//CREAR EL SERVIDOR
const servidor = http.createServer((req, res)=>{
    console.log('Solicitud nueva');
    res.end('Hola mundo!')
});

//CONECTAR EL PUERTO PARA QUE ESCUCHE
const puerto = 3000;
servidor.listen(puerto, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`)
});