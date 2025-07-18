let carrito = [];
var total = 0;
let dineroAcumulado = 0;

function Carrito(){
  var codigoingresado = parseInt(document.getElementById("codigo").value, 10);
  var lista = document.getElementById("carritobody");

  for(i = 0; i < productosdatos.length; i++){
    if(codigoingresado === productosdatos[i].codigodebarras){
     var fila = document.createElement("tr");
     var celdacodigodebarras = document.createElement("td");
     celdacodigodebarras.textContent = productosdatos[i].codigodebarras;
     celdacodigodebarras.id = "codigodebarras";
     fila.appendChild(celdacodigodebarras);
     var celdaNombre = document.createElement("td");
     celdaNombre.textContent = productosdatos[i].nombre;
     celdaNombre.id = "nombredelproducto";
     fila.appendChild(celdaNombre);
     var celdapreciodeventa = document.createElement("td");
     celdapreciodeventa.textContent = productosdatos[i].preciodeventa;
     celdapreciodeventa.id = "preciodelproducto";
     fila.appendChild(celdapreciodeventa);
     var celdaimporte = document.createElement("td");
     celdaimporte.textContent = productosdatos[i].importe;
     celdaimporte.id = "importedelproducto";
     fila.appendChild(celdaimporte);
     lista.appendChild(fila);
    }
  }
}

function calculo(){
  var section = document.getElementById("seccion");
  var venta = document.getElementsByClassName("carritobody")[0];
  var filas = venta.getElementsByTagName("tr");
  

  for(let i = 0; i < filas.length; i++){
    var celdas1 = filas[i].getElementsByTagName("td");
    var importetotal = celdas1[3].textContent;
    var anumero = parseFloat(importetotal);

    if(!isNaN(anumero)){
      total += anumero;
    }
  }

  var mostrartotal = document.getElementById("totalCompra");

  if (mostrartotal) {
    mostrartotal.textContent = "Total: $" + total;
  } else {
    mostrartotal = document.createElement("h1");
    mostrartotal.id = "totalCompra";
    mostrartotal.textContent = "Total: $" + total;

    section.appendChild(mostrartotal);
  }
}

function Pagos(){
 document.addEventListener("click", (event) => {
  if (event.target && event.target.id === "efectivo") {
    const zona = document.getElementById("zonaDinamica");
    zona.innerHTML = "";
    dineroAcumulado = 0;

    const cantidadingresada = document.createElement("input");
    cantidadingresada.placeholder = "ingresa la cantidad dada por el cliente";
    cantidadingresada.id = "cantidaddelcliente";
    const Btnpago = document.createElement("button");
    Btnpago.textContent = "Pagar";
    Btnpago.id = "btnPagar";
    zona.appendChild(cantidadingresada);
    zona.appendChild(Btnpago);

    Btnpago.addEventListener("click", (event) => {
      var cantidadefectivo = parseFloat(cantidadingresada.value);
      if (isNaN(cantidadefectivo)) {
        alert("No es un numero");
        return;
      }

       dineroAcumulado += cantidadefectivo;

      if(cantidadefectivo === total){
         const caso1 = document.createElement("h3");
         caso1.textContent = "Gracias por su compra";
         zona.appendChild(caso1);
      }if(cantidadefectivo < total){
        dineroAcumulado = cantidadefectivo;

        const faltante = document.createElement("input");
        faltante.placeholder = "ingrese la cantidad faltante"
        faltante.id = "faltante"
        const confimacion = document.createElement("button");
        confimacion.textContent = "Confirmarcant"
        confimacion.id = "confirmar"
        zona.appendChild(faltante);
        zona.appendChild(confimacion);

        confimacion.addEventListener("click", () => {
           const cantidadFaltante = parseFloat(faltante.value);
           if (isNaN(cantidadFaltante)) {
           alert("Por favor ingrese una cantidad válida");
           return;
          }

          dineroAcumulado += cantidadFaltante;

          if(dineroAcumulado > total) {
          const caso2 = document.createElement("h3");
          caso2.textContent = "Gracias por su compra"
          zona.appendChild(caso2);
          }else {
          faltante.value = "";
         }
          
        })
        
        
      }if(cantidadefectivo > total){
        const cambio = dineroAcumulado - total;
        const caso3 = document.createElement("h3");
        caso3.textContent = "Gracias por su compra su cambio es: " + cambio;
        zona.appendChild(caso3);
      }else{
        
      }
      
    })
  }
});
 
}


Pagos();



