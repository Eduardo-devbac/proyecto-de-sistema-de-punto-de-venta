

function seleccionprovedores(){
    const selecprovexis = document.getElementById("busquedaexis");
    provedoresdatos.forEach(function(provedor){
        const opcion = document.createElement("option");
        opcion.value = provedor.id;
        opcion.textContent = provedor.nombre;
        selecprovexis.appendChild(opcion);
    });
}


function busquedadeexitencias(){
  var produexis = document.getElementById("busquedaexis");
  var tbody = document.getElementById("body")
  produexis.addEventListener("change" , (event) => {
  const proveedorId = parseInt(event.target.value, 10);
  tbody.innerHTML = ""
  
  var exisprodu = inventariodatos.filter(ep => ep.idprovedor === proveedorId);

  

  exisprodu.forEach(function(existancia){
     var fila = document.createElement("tr");
     var celdaidproducto = document.createElement("td");
     celdaidproducto.textContent = existancia.idProducto;
     fila.appendChild(celdaidproducto);
     var celdanombre = document.createElement("td");
     celdanombre.textContent = existancia.nombre;
     fila.appendChild(celdanombre);
     var celdaprovedor = document.createElement("td");
     celdaprovedor.textContent = existancia.idprovedor;
     fila.appendChild(celdaprovedor);
     var celdacantidad = document.createElement("td");
     celdacantidad.textContent = existancia.cantidad;
     fila.appendChild(celdacantidad);
     tbody.appendChild(fila);
  })

   
   } 
)};

seleccionprovedores();
busquedadeexitencias();