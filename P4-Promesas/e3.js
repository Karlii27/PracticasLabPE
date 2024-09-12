function solicitarDatosDelServidor(){
    return new Promise((resolve, reject)=>{
        let exito=false

        setTimeout(() => {
            if (exito){
                resolve({
                    id:1,
                    nombre: "Ashely Molina",
                    edad:19
                })
            } else{
                reject("Error al obtener los datos del servidor")
            }
        }, 2000);
    })
}
solicitarDatosDelServidor()
.then((datos)=> {
    console.log("Datos recibios: ", datos)
})
.catch((error)=>{
    console.error(error)
})