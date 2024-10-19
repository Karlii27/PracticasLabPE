class Coche{
    constructor(marca, modelo){
        this._marca=marca
        this._modelo=modelo
    }
    arrancar(){
        console.log(`${this._marca} ${this._modelo} está arrancando`)
    }
    detener(){
        console.log(`${this._marca} ${this._modelo} se ha detenido`)
    }
}

const choche1= new Coche('BMW', 'X1')
choche1.arrancar()
choche1.detener()