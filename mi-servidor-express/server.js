const express= require('express')

const app = express()

//Definir el puerto en el que se escuchará el servidor
const PORT= process.env.PORT || 3000

//Configuración de rutas
//Ruta principal (root) que responde con un mensaje

app.get('/', (req, res)=>{
    res.send('¡Hola Mundo! Este es mi servidor Express')
})

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http:\\localhost:${PORT}`)
})