const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject)=>{
   setTimeout(() => {
    if(promesaCumplida){
        resolve('Promesa cumplida')
    } else {
        reject('Promesa rechazada...')
    }
   }, 3000); 
});

const manejarPromesaCumplida = (valor)=>{ //Indicaciones en caso de cumplida
    console.log(valor);
}

const manejarPromesaRechazada = (err)=>{ //Indicaciones en caso de rechazada
    console.log(err);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);