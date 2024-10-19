class CuentaBancaria{
    constructor(titular, saldo){
        this._titular=titular
        this._saldo=saldo
    }
//Método estático
    static tipoDeCuenta(){
        return 'Cuenta de Ahorros';
    }

    inprimirInfo(){
        console.log(`Titular: ${this._titular}, Saldo: ${this._saldo}`)
    }
}

const cuenta1= new CuentaBancaria('Karla', 3000)
cuenta1.inprimirInfo()
console.log(CuentaBancaria.tipoDeCuenta())