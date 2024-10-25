let objeto={
    //Método Get
    get propiedad(){
        return "Valor de la propiedad"
    },
    //Método Set
    set propiedad(valor){
        console.log(`Asignando el valor: ${valor}`)

    }
}
//uso del get
console.log(objeto.propiedad)

//uso del set
objeto.propiedad="Nuevo valor"