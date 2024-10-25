class Clima{
    constructor(celsius){
        this._celsius=celsius
    }
//Get para obtener la temperatura en Farenheit
    get fahrenheit(){
        return (this._celsius*9)/5+32
    }
// Set para asignarle la temperatura a Farenheit
    set fahrenheit(fahrenheit){
        this._celsius=(fahrenheit-32)*5/9
    }

//Get y Set para la temperatura en celsius
    get celsius(){
        return this._celsius
    }
    set celsius(celsius){
        this._celsius=celsius
    }
}

const clima= new Clima(25)
console.log(`Clima en grados de Farenheit: ${clima.fahrenheit}°F`)
clima.fahrenheit=86
console.log(`Clima en grados Celcius ${clima.celsius}°C`)