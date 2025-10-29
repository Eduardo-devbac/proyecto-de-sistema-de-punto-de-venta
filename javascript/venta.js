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
     var celdaCantidad = document.createElement("td");
     celdaCantidad.textContent = "1"
     celdaCantidad.id = "cantidaddelproducto"
     fila.appendChild(celdaCantidad);
     lista.appendChild(fila);
    }
  }
  //console.log(celdaNombre.textContent);
};

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
  //Pago con efectivo
 document.addEventListener("click", (event) => {
  if (event.target && event.target.id === "efectivo") {
    const zona = document.getElementById("zonaDinamica");
    zona.innerHTML = "";
    dineroAcumulado = 0;
     let mensajeFaltante = document.getElementById("mensaje-faltante");
    
  

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

        dineroAcumulado = dineroAcumulado + cantidadefectivo;
        //Cantidad exacta
      if(cantidadefectivo === total){
        const mensajeFaltante = document.getElementById("mensaje-faltante");
         if(!mensajeFaltante){
          mensajeFaltante.remove();
         }
         const caso1 = document.createElement("h3");
         caso1.textContent = "Gracias por su compra";
         zona.appendChild(caso1);
         }
         //Cantidad menor
         if(cantidadefectivo < total){
        dineroAcumulado = cantidadefectivo;
        var faltante = total - cantidadefectivo;
        let mensajeFaltante = document.getElementById("mensaje-faltante");
        if(!mensajeFaltante){
         mostrarfaltante = document.createElement("h2");
         mostrarfaltante.id = "mensaje-faltante";
        zona.appendChild(mostrarfaltante);
        }
        mostrarfaltante.textContent = "Cantidad faltante: " + faltante;
        }
        // Mostrar faltante
        
        
        
         
        
      //Cantidad mayor
      if(cantidadefectivo > total){
        const cambio = cantidadefectivo - total;
        const caso3 = document.createElement("h3");
        caso3.textContent = "Gracias por su compra su cambio es: " + cambio;
        zona.appendChild(caso3);
      }else{
        
      }
      
    })
  }
});


//Pago con tarjeta
document.addEventListener("click", (event) => {
  const zona = document.getElementById("zonaDinamica");
  if (event.target && event.target.id === "tarjeta"){
   const ptarjetata = document.createElement("h3");
   ptarjetata.textContent = "Gracias por su compra";
   zona.appendChild(ptarjetata);
  }
  
}) 
}

function ticketvirtual(){
  var producto = document.getElementById("nombredelproducto");
  var precio = document.getElementById("preciodelproducto");
  var nomtienda = document.getElementById("nombretienda");
  var generarticket = document.getElementById("ticket");

  var tiendanombre = document.createElement("h2");
   tiendanombre.textContent = nomtienda.textContent
   generarticket.appendChild(tiendanombre);
  var producto2 = document.createElement("h3");
   producto2.textContent = producto.textContent
   generarticket.appendChild(producto2);
  var precio2 = document.createElement("h3");
   precio2.textContent = precio.textContent 
   generarticket.appendChild(precio2);
  var fecha = new Date()
   var mostrarfecha = document.createElement("h3");
   let dia = String(fecha.getDate()).padStart(2, "0");
   let mes = String(fecha.getMonth() + 1).padStart(2, "0");
   let año = fecha.getFullYear();

   let hora = String(fecha.getHours()).padStart(2, "0");
   let minutos = String(fecha.getMinutes()).padStart(2, "0");
   let segundos = String(fecha.getSeconds()).padStart(2, "0");
  mostrarfecha.textContent = `${dia}/${mes}/${año} ${hora}:${minutos}:${segundos}`
   generarticket.appendChild(mostrarfecha);
  
  
  console.log(producto.textContent,precio.textContent);
}


Pagos();




