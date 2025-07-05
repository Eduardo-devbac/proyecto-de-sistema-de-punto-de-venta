let carrito = [];

function Carrito(){
  var codigoingresado = parseInt(document.getElementById("codigo").value, 10);
  var lista = document.getElementById("carritobody");

  for(i = 0; i < productosdatos.length; i++){
    if(codigoingresado === productosdatos[i].codigodebarras){
     var fila = document.createElement("tr");
     var celdacodigodebarras = document.createElement("td");
     celdacodigodebarras.textContent = productosdatos[i].codigodebarras;
     fila.appendChild(celdacodigodebarras);
     var celdaNombre = document.createElement("td");
     celdaNombre.textContent = productosdatos[i].nombre;
     fila.appendChild(celdaNombre);
     var celdapreciodeventa = document.createElement("td");
     celdapreciodeventa.textContent = productosdatos[i].preciodeventa;
     fila.appendChild(celdapreciodeventa);
     var celdaimporte = document.createElement("td");
     celdaimporte.textContent = productosdatos[i].importe;
     fila.appendChild(celdaimporte);
     lista.appendChild(fila);
    
    let productoEncontrado = productosdatos[i];
    console.log("Producto encontrado:", productoEncontrado);

    }
  }
}

