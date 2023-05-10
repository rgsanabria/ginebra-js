function saludar() {
    let nombre = prompt("ingrese su nombre");
    alert("Bienvenido/a" + nombre + "a Ginebra");
}

function comprarBebida() {
    bebida = prompt("seleccione una opcion \n 1: combo1: fernet-coca \n 2: combo2: gin-tonica \n 3: combo3: smirnoff-energizante");

  if (bebida === "1"){
    alert("se agrego su combo al carrito");
  } 
  else if (bebida === "2"){
    alert("se agrego su combo al carrito");
  } 
  else if (bebida === "3"){
    alert("se agrego su combo al carrito");
  option = prompt( "Seleccione como continuar \n 1: mostrar monto \n 1: Finalizar compra ");
}
}

function finalizarCompra(){
    if (bebida === "1") {
    alert ("Selecciono el combo 1 de  " + fernet+coca * 1.21);
    }
    else if (bebida === "2"){
        alert ("Selecciono el combo 2 de  " + gin+tonica * 1.21);
    }
    else if (bebida === "3"){
        alert ("Selecciono el combo 3 de  " + smirnoff+energizante * 1.21); 
    }

 }



let bebida;
let combo1 = 5000;
let combo2 = 4000;
let combo3 = 6000;
saludar();
let option = prompt("Ingrese una opcion: \n 1: seguir comprando  \n 2: finalizar compra  \n 3: terminar");


while (opcion!=="3"){
    if (option ==="1"){
        comprarBebida();
    }
    if (option === "2"){
        finalizarCompra();
        option = "3";
    }
}
alert ("Gracias por su compra, desea volver al menu principal?");