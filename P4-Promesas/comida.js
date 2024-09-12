function procesarPedido(pedido) {
    return new Promise((resolve, reject) => {
        console.log(`Procesando el pedido: ${pedido}...`);

       
        setTimeout(() => {
            
            const exito = Math.random() > 0.5

            if (exito) {
                resolve(`Pedido de ${pedido} realizado con éxito!`);
            } else {
                reject(`Error al procesar el pedido de ${pedido}.`);
            }
        }, 2000)
    })
}

procesarPedido("Pizza")
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error))
