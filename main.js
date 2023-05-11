function saludar() {
    let nombre = prompt("ingrese su nombre");
    alert("Bienvenido/a  " + nombre + " a Ginebra");
}

function comprarBebida() {
    bebida = prompt("seleccione una opcion \n 1: fernet \n 2: gin \n 3: energizante");

  if (bebida === "1"){
    alert("se agrego su bebida al carrito");
    
  } 
  else if (bebida === "2"){
    alert("se agrego su bebida al carrito");
   
  } 
  else if (bebida === "3"){
    alert("se agrego su bebida al carrito");
  
}

}

function finalizarCompra() {
    if (bebida === "1") {
    alert ("El monto de su eleccion es  " + fernet * 1.21);
    }
    else if (bebida === "2"){
        alert ("El monto de su eleccion es  " + gin * 1.21);
    }
    else if (bebida === "3"){
        alert ("El monto de su eleccion es  " + energizante * 1.21); 
    }

 }
 
let bebida;
let fernet = 2000;
let gin = 4000;
let energizante = 600;
saludar();
comprarBebida();
finalizarCompra();

let opcion = prompt("Ingrese una opcion: \n 1: seguir comprando  \n 2: finalizar compra \n 3: Vaciar ");


while (opcion !== "3") {
    if (opcion=== "1"){
        comprarBebida();
        finalizarCompra();
    }
    if (opcion=== "2") {
        finalizarCompra();
        opcion = "3";
    }
}
alert ("Desea volver al menu principal?");

