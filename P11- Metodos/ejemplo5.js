class CuentaBancaria{
    constructor(saldo){
        this._saldo=saldo
    }
//Get para obtener el saldo actual
    get saldo(){
        return this._saldo
    }

    //Set para modificar el saldo, asegurando que no sea negativo

    set saldo(cantidad){
        if (cantidad>=0) {
            this._saldo=cantidad
        }else{
            console.log(`Saldo: ${cantidad}, no se puede establecer un saldo negativo`)
        }
    }
}

 const cuenta= new CuentaBancaria(1000)
 console.log(`Saldo inicial: ${cuenta.saldo}`)

 cuenta.saldo=500
 console.log(`Movimiento: $${cuenta.saldo}`)

 cuenta.saldo=-200
 console.log(`Saldo actual: $${cuenta.saldo}`)