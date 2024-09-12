const doTask = (iteraciones) => {
    return new Promise((resolve, reject) => {
        const numbers = [];

        if (iteraciones === 0) {
            resolve({
                error: false,
                value: numbers
            });
            return;
        }

        for (let i = 0; i < iteraciones; i++) {
            // Genera un número aleatorio entre 1 y 6
            const number = 1 + Math.floor(Math.random() * 6);
            // Agrega el número generado al arreglo
            numbers.push(number);

            if (number === 6) {
                reject({
                    error: true,
                    message: "Se ha sacado un 6"
                });
                return;
            }
        }

        resolve({
            error: false,
            value: numbers
        });
    });
};

doTask(5)
    .then(result => console.log("Tiradas correctas:", result.value))
    .catch(err => console.error("Ha ocurrido algo:", err.message));
