const readline= require('readline')
const rl= readline.createInterface({
   input:process.stdin,
   output:process.stdout
})

function edadP() {
  rl.question("Ingrese su edad: ", (edad)=>{
     if (edad<=12) {
        console.log("Es un niño")

     }else if(edad >=13 && edad <17){
        console.log("Eres un adolescente")

     }else if(edad >=18 && edad <=35){
        console.log("Usted es un adulto joven")
     }else if(edad >=36 && edad <=59){
        console.log("Usted es un adulto")
     }else{
        console.log("Usted es un adulto mayor")
     }
     rl.close()
  })
}
edadP()

