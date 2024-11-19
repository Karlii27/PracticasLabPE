const readline= require('readline')

const create= require('./create')
const addVehicle= require('./add')
const read= require('./read')
const modify= require('./modify')
const deleteVehicle= require('./delete')
const countArray= require('./count')

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function showMenu(){
    console.log('\n------ Menú ------')
    console.log('1. Crear Archivo JSON')
    console.log('2. Leer Archivo JSON')
    console.log('3. Agregar vehículo')
    console.log('4. Modificar vehículo')
    console.log('5. Eliminar vehículo')
    console.log('6. Contar Array')
    console.log('7. Salir')
}

function handleMenuOption(option){
    switch(option){
        case '1':
            create();
            break;
        case '2':
            read();
            break;
        case '3':
            addVehicle();
            break;
        case '4':
            modify();
            break;
        case '5':
            deleteVehicle();
            break;
        case '6':
            countArray()
            break;
        case '7':
            console.log('Saliendo del programa...')
            rl.close()
            return;
        default:
            console.log('Opción no válida. Intente de nuevo')
            break;
    }
    setTimeout(promptMenu, 100)
}

function promptMenu(){
    showMenu();
    rl.question('Seleccione una opción: ', handleMenuOption)
}
promptMenu();