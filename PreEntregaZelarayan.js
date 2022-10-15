let titulo = "Espartano $ 12.999"
console.log(titulo)

let titulo1 = "Torsion $ 13.999"
console.log(titulo1)

let titulo2 = "Mecanico $ 15.999"
console.log(titulo2)

let titulo3 = "Color Blanco y Negro"
console.log(titulo3)

let titulo4 = "Color Cobre y Negro"
console.log(titulo4)

let titulo5 = "Material Pla"
console.log(titulo5)

let titulo6 = "Acabado Brillante"
console.log(titulo6)

let titulo7 = "Acabado Satinado"
console.log(titulo7)

let titulo8 = "Acabado Brillante"
console.log(titulo8)


let preguntarEdad = prompt("Responder por si o por no, si es mayor de edad")

if(preguntarEdad.toLowerCase() == "si"){
    console.log("Usted puede comprar nuestros productos")
}else{
    console.log("Usted NO puede comprar nuestros productos")
}

let colorDeseado = prompt("Ingrese color deseado")

if(colorDeseado.toLowerCase() == "blanco y negro"){
    console.log("Usted eligio color " + colorDeseado)
}else if(colorDeseado == "cobre y negro"){
    console.log("Usted eligio color " + colorDeseado)
}else{
    console.log("NO trabajamos ese color")
}

let nombreJuego = prompt("Ingrese nombre de juego")
let cantidadJuegos = parseInt(prompt("Ingrese la cantidad de juegos"))
let color = prompt("Ingrese color")
let materialPla = prompt("Ingrese material")
let acabado = prompt("Ingrese acabado")
let numero = parseInt(prompt("Ingrese precio"))

let mul = cantidadJuegos * numero
console.log(mul)

console.log("El juego " + nombreJuego + " cantidad " + cantidadJuegos + " de color " + color + " material " + materialPla + " acabado " + acabado + " tiene un precio unitario de $ " + numero )

if(mul){
    console.log("Precio final $ " + mul)
}else{
    console.log("Si no elige una cantidad, usted no puede comprar nuestros productos")
}



