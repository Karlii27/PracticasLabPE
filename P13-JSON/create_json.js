const fs= require('fs')
const fileName= 'biblioteca.json'

const libros=[
    {id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel Carcía Márquez', disponible: true},
    {id: 2, titulo: 'Don Quijote de la Manncha', autor: 'Miguel de Cervantes', disponible: false},
    {id: 3, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', disponible: true}
]

fs.writeFile(fileName, JSON.stringify(libros, null, 2), (err)=>{
    if(err){
        console.log('Error al crear el archivo JSON', err)
    }
    console.log('Archivo JSON creado exitosamente con tres libros iniciales')
})