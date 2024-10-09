const readline= require('readline');


const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Introduce una cadena de texto: ', (cadena)=>{
    rl.question('Introduce la letra a contar: ', (letraABuscar)=>{
        let contadorLetras=0
        let posicion=0

        do{
            if(cadena[posicion].toLowerCase()=== letraABuscar.toLowerCase()){
                contadorLetras++;
            }
            posicion++
        }while(posicion<cadena.length)
            console.log(`La letra '${letraABuscar}' aparece ${contadorLetras} veces en la cadena`)
            rl.close()
    })
})