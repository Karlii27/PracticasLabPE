const readline= require('readline');


const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

console.log("Adivina el número secreto (entre 1 y 100):");

const pedirNumero = () => {
    rl.question("Ingresa un número: ", (respuesta) => {
        const intento = parseInt(respuesta);
        intentos++;

        if (intento < numeroSecreto) {
            console.log("Demasiado bajo. Intenta de nuevo.");
            pedirNumero(); // 
        } else if (intento > numeroSecreto) {
            console.log("Demasiado alto. Intenta de nuevo.");
            pedirNumero();
        } else {
            console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
            rl.close();
        }
    });
};


pedirNumero();