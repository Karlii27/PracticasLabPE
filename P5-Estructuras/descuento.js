
let categoria = "regular" 
let totalCompra = 250   

let descuento = 0

if (categoria === "premium") {
    if (totalCompra >= 500) {
        descuento = 0.20 
    } else {
        descuento = 0.10
    }
} else if (categoria === "regular") {
    if (totalCompra >= 500) {
        descuento = 0.10  
    } else {
        descuento = 0.05
    }
} else if (categoria === "nuevo") {
    if (totalCompra >= 500) {
        descuento = 0.05
    } else {
        descuento = 0
    }
} else {
    console.log("Categoría de cliente no válida.");
}

let totalConDescuento = totalCompra - (totalCompra * descuento);
console.log(`Categoría: ${categoria}`)
console.log(`Total de la compra: $${totalCompra}`)
console.log(`Descuento aplicado: ${(descuento * 100)}%`)
console.log(`Total a pagar: $${totalConDescuento.toFixed(2)}`)
