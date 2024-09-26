const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número del 1 al 12: ", (numero) => {
    numero = parseInt(numero)
    let mes;

    switch (numero) {
        case 1:
            mes = "Enero"
            break;
        case 2:
            mes = "Febrero"
            break;
        case 3:
            mes = "Marzo"
            break;
        case 4:
            mes = "Abril"
            break;
        case 5:
            mes = "Mayo"
            break;
        case 6:
            mes = "Junio"
            break;
        case 7:
            mes = "Julio"
            break;
        case 8:
            mes = "Agosto"
            break;
        case 9:
            mes = "Septiembre"
            break;
        case 10:
            mes = "Octubre"
            break;
        case 11:
            mes = "Noviembre"
            break;
        case 12:
            mes = "Diciembre"
            break;
        default:
            console.log("El número ingresado no es válido. Debe estar entre 1 y 12.")
            rl.close()
            return; 
    }

    console.log(`El mes correspondiente al número ${numero} es ${mes}.`);
    rl.close();
});
