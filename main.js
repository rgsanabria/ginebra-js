function saludar() {
    let nombre = prompt("¡Hola! Ingrese su nombre por favor");
    alert("Bienvenido/a  " + nombre + " a Ginebra");
}

class Bebidas{
    constructor(marca, precio, tamaño){
        this.marca =marca;
        this.precio =precio;
        this.tamaño =tamaño;
    }
}

let precios = [
    {marca: "Fernet", precio:"2500"},
    {marca: "Smirnoff", precio:"3000"},
    {marca: "Jagger", precio:"4000"},
    {marca: "CocaCola", precio:"800"},
    {marca: "Energiaznte", precio:"500"},
]

saludar()

function cargarProducto(){
 let marca = prompt("Ingrese la marca de la bebida elegida. Ej: Fernet");
 let precio = parseInt(prompt("Ingrese el precio"));
 let tamaño = prompt("Ingrese el tamaño");
 //creacion de un objeto//
 const nuevaBebida = new Bebidas(marca, precio, tamaño)
 arrayCarrito.push(nuevaBebida)
 alert("Producto añadido en el carrito")
}

function verCarrito(){
    arrayCarrito.forEach((producto)=>{
     alert(`Usted eligio la bebida ${producto.marca} por un total de ${producto.precio} en tamaño ${producto.tamaño}`)
    })
}

function mostrarOferta(){
    const ofertas = precios.filter((bebida)=> bebida.precio < 3000)
    for(const oferta of ofertas){
        alert(`Estas son las ofertas de hoy: bebidas ${oferta.marca} a un total de ${oferta.precio}`)
    }
}

function finalizarCompra(){
    const total = arrayCarrito.reduce((acc, el)=> acc +el.precio, 0);
    alert(`Gracias por su compra, el total es de ${total}`);
}

let arrayCarrito = []

let opcion = prompt("Ingrese una opcion: \n 1: Cargar productos  \n 2: Ver ofertas \n 3: Ver carrito \n 4: Finalizar compra \n 5: Salir ");

while (opcion !== "5") {
    if (opcion === "1"){
        cargarProducto(arrayCarrito)
    }
    if (opcion === "2") {
       mostrarOferta()
    }
    if (opcion === "3"){
        verCarrito()
    }
    if (opcion === "4"){
        finalizarCompra()
    }
    opcion = prompt ("Ingrese una nueva opcion: \n 1: Seguir comprando  \n 2: Ver ofertas \n 3: Ver carrito \n 4: Finalizar compra \n 5: Salir ")
}
alert ("Muchas gracias por su compra");

