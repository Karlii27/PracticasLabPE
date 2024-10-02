const headers= document.querySelectorAll('h1, h2, h3, h4, h5, h6')

for (let i=0; i<headers.length; i++){
    //Cambia el texto de cada encabezado
    headers[i].innerText=`Nuevo Encabezado de nivel ${i-1}`
}