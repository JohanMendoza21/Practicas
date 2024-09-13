function ordernarProducto(producto){
    return new Promise((resolve, reject)=>{
        console.log(`Ordenando producto: ${producto} de Zaza Store.`);
        setTimeout(()=>{
            if(producto === 'taza'){
                resolve('Ordenando una taza de Zaza Store...');
            } else{
                reject('No tenemos el articulo disponible...  :(');
            }
        }, 2000);
    });   
}

function procesarPedido(respuesta){
    return new Promise(resolve =>{
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: ${respuesta}...`);
        setTimeout(()=>{
            resolve('Gracias por tu compra!');
        }, 4000)
    });
}

// ordernarProducto('taza')
//     .then((respuesta)=>{
//         console.log('Respuesta recibida');
//         console.log(respuesta);
//         return procesarPedido(respuesta);
//     })
//     .then(respuestaProcesada =>{
//         console.log(respuestaProcesada);
//     })
//     .catch(error =>{
//         console.log(error);
//     })

async function realizarPedido(producto){
    try {
        const respuestaRecibida = await ordernarProducto(producto);
        console.log('respuestaRecibida');
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    } catch {
        console.log(error);
    }
}   