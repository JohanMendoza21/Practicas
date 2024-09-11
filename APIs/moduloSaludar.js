function saludar(nom){
    console.log(`Hola ${nom}!!`);
}

function saludarHolaMundo(){
    return 'Hola, Mundo';
}


module.exports = {
    saludar : saludar,
    saludarHolaMundo : saludarHolaMundo 
}

//console.log(module.exports);