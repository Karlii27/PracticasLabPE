class Libro{
    constructor(titulo, autor, anio){
        this._titulo=titulo
        this._autor=autor
        this._anio=anio
    }
    resumen(){
        console.log(`${this._titulo} de ${this._autor} publicado en ${this._anio}`)
    }
}
const libro= new Libro('Las Cadenas del Rey', 'Karine Bernal Lobos', 2024)
libro.resumen()