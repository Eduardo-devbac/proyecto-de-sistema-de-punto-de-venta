let producto = [];


function seleccionprovedores(){
    const selecprov = document.getElementById("provedores1");
    provedoresdatos.forEach(function(provedor){
        const opcion = document.createElement("option");
        opcion.value = provedor.id;
        opcion.textContent = provedor.nombre;
        selecprov.appendChild(opcion);
    });
}

function seleccionproductos(){
    var proveselc = document.getElementById("provedores1")
    var produslect = document.getElementById("productos1")
    proveselc.addEventListener("change" , (event) => {  
    const proveedorId = parseInt(event.target.value, 10);
    produslect.innerHTML = '<option value="">Selecciona producto</option>';
    var produfil = productosdatos.filter(p => p.idproveedor === proveedorId);
   
   produfil.forEach(function(producto){
        const opcion = document.createElement("option");
        opcion.value = producto.id;
        opcion.textContent = producto.nombre;
        produslect.appendChild(opcion);
    })}
)   
};


function agregarProducto() {
    const select = document.getElementById("productos1");
    const productoId = parseInt(select.value); 

    if (!isNaN(productoId)) {
        const prodSeleccionado = productosdatos.find(p => p.id === productoId);

        if (prodSeleccionado) {
            producto.push(prodSeleccionado.nombre); 
            select.value = ''; 
            mostrarproducto(); 
        }
    }
}

function mostrarproducto (){
   const produclist = document.getElementById("lista");
   produclist.innerHTML = "";
   for(let i = 0; i < producto.length; i++){
    const canasta = producto[i];
    const li = document.createElement('li');
    li.textContent = canasta;

    const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", () => eliminarproducto(canasta));

    

     li.appendChild(btnEliminar);

   
    produclist.appendChild(li);
   };
};

function eliminarproducto(nombreProducto) {
    const index = producto.indexOf(nombreProducto);
    if (index > -1) {
        producto.splice(index, 1); 
        mostrarproducto();
    }
};

seleccionprovedores();
seleccionproductos();