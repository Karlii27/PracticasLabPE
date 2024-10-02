function contarVocalesYDigitos() {
    let cadena = "Hola buenas tardes, tengo 19 años";
    
    //Valida que el usuario ingrese una cadena no vacía
    while (cadena.trim() === "") {
        cadena = prompt("Por favor, ingrese una cadena de texto (no puede estar vacía):");
    }

    let vocales = "aeiouAEIOU"
    let numVocales = 0;
    let numDígitos = 0;

    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        

        if (vocales.includes(caracter)) {
            numVocales++;
        }

        
        if (!isNaN(caracter) && caracter >= '0' && caracter <= '9') {
            numDígitos++;
        }
    }

    console.log(`La cadena contiene ${numVocales} vocales y ${numDígitos} dígitos.`);
}


contarVocalesYDigitos();
