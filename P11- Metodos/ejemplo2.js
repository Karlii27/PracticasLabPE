class Persona{
    constructor(nombre, apellido){
        this._nombre=nombre
        this._apellido=apellido
    }

    get nombreCompleto(){
        return `${this._nombre} ${this._apellido}`
    }

    set nombreCompleto(nombreCompleto){
    [this._nombre, this._apellido]=nombreCompleto.split(" ")
    }
}
const persona= new Persona("Karla", "Morales")
//Modificación cn Set

persona.nombreCompleto="Noemi Medrano"
//uso del set
console.log(persona.nombreCompleto)
