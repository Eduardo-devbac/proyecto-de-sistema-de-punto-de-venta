function sesion(){
var usuario = document.getElementById("usuario").value;
var contraseña = document.getElementById("contraseña").value;
let i = 0
encontrado = false;

while(i < usuarios1.length){
   if(usuario === usuarios1[i].nombre && contraseña === usuarios1[i].password){
    
    encontrado = true;
    break;
   }
   i++;
}

if(encontrado){
  window.location.replace("venta.html");
}
}

//Inicio de sesion
const botonLogin = document.getElementById("Iniciar-Sesión");
botonLogin.addEventListener("click", sesion);

//cerrar sesion
const botonloguot = document.getElementById("cerrar-sesion")
botonloguot.addEventListener("click", (event) =>{
    window.location.replace("sesion.html");
})
