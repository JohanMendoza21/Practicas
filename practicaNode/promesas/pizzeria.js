const estatusPedido = ()=>{//Simulando respuestas aleatorias
    const estatus = Math.random() < 0.8;
    console.log(estatus);
    return estatus;  
}

const miPedidoDePizza = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(estatusPedido()){
            resolve('Pedido exitoso!, su pizza esta en camino')
        } else {
            reject('Ocurrio un error, por favor intente nuevamente.')
        }
    }, 3000);
     
});

// const manejoPedido = (mensajeConfirmacion)=>{
//     console.log(mensajeConfirmacion);
// }
// const rechazarPedido = (mensajeDeError)=>{
//     console.log(mensajeDeError);
// }

// miPedidoDePizza.then(manejoPedido, rechazarPedido);

miPedidoDePizza
.then((manejoPedido)=>{
    console.log(manejoPedido);
})
.catch((mensajeError)=>{
    console.log(mensajeError)
});