// const curso = require('./curso.json');

// console.log(curso.titulo);
let infoCurso = {
    "titulo" : "Aprende Node.js",
    "numVistas" : 45624,
    "numLikes" : 21123,
    "temas" : [
        "javaScript",
        "Node.js"
    ],
    "esPublico" : true
}
//Cadena de caracteres en formato JSON
let infoCursoJson = JSON.stringify(infoCurso);

console.log(infoCursoJson); 

//Cadena de caracteres --> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJson);

