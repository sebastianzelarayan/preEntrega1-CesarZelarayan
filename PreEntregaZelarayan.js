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

function pedirNombreJuego(){
    let nombreJuego = prompt("Ingrese nombre de juego")
    return nombreJuego
}

// let nombreJuego = prompt("Ingrese nombre de juego")
let nombreJuego = pedirNombreJuego()
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

function pedirNombre(){
    let personaIngresada = prompt("Ingresar nombre")
    console.log(`Hola ${personaIngresada} bienvenido a Ziddesign`)
}

pedirNombre()

function suma(juegoEspartano, juegoEspartano, juegoTorsion){
    console.log(`La suma es $ ${juegoEspartano+juegoEspartano+juegoTorsion} `)
}
suma(12999,12999,13999)

function resta(juegoTorsion, juegoMecanico){
    return juegoTorsion-juegoMecanico
}
let resultado = resta(15999,13999)
console.log(resultado)

function pedirValores(){
    let valor1 = parseInt(prompt("Ingrese el primer valor"))
    let valor2 = parseInt(prompt("Ingrese el segundo valor"))
    let operador = prompt("Ingrese el operador deseado")
    let resultado = calculadora(valor1, valor2, operador)
    console.log(resultado)
}

function calculadora(juegoMecanico, primerPuesto, operacion){
    switch (operacion) {
        case "+":
            return juegoMecanico + primerPuesto;
        case "-":
            return juegoMecanico - primerPuesto;
        default:
            return 0;
    }
}
console.log(calculadora(15999, 17999, "+"))
console.log(calculadora(15999, 17999, "-"))

pedirValores ()

const integrante1 = {
    nombre: "Sebastian",
    edad: 44,
    rol: "diseñador",
    ciudad: "CABA, Argentina",
    puesto: {
        puestoPrincipal: "SEO",
        puestoSecundario: "Creador de productos"
    }
}

const integrante2 = {
    nombre: "Martin",
    edad: 41,
    rol: "ingeniero",
    ciudad: "Lavallol, Argentina"
}
const integrante3 = {
    nombre: "Tiago",
    edad: 18,
    rol: "vendedor",
    ciudad: "CABA, Argentina"
}
console.log(integrante1)
console.log(integrante2)
console.log(integrante1.nombre)
console.log(integrante2.rol)
console.log(integrante3.rol)