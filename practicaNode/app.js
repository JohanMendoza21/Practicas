const fs = require('fs');

// fs.readFile('index.html', 'utf-8', (err, contenido)=> {
//     if(err){
//         throw(err); //Con throw se detiene la ejecucion, mientras que con console.log no
//     } else {
//         console.log(contenido);
//     }
//     console.log('La ejecuion no se cancelo') //Se muestra si -5   console.log(err);
// });

// fs.rename('index.html', 'newName.html', (err)=>{
//     if(err){
//         throw(err);
//     }
//     console.log('Nombre cambiado exitosamente');
// });


//Agragar contenido al final de un archivo.

// fs.appendFile('index.html', '<p>Hola esto se agrego con Node</p>', (err) =>{
//     if(err){
//         throw(err);
//     }
//     console.log('Archivo actualizado')
// });

//Remplazar todo el contenido de un archivo

// fs.writeFile('index.html', 'Contenido nuevo', (err)=>{
//     if(err) throw err;
//     console.log('Contenido actualizado');
// });

//Eliminar archivos

//fs.unlink('index.html')