const provedoresdatos = [
    {id: 1, nombre: "Coca-cola"},
    {id: 2, nombre: "Gamesa"},
    {id: 3, nombre: "Bimbo"},
    {id: 4, nombre: "Quereataro"},
    {id: 5, nombre: "Pepsi"},
    
];

const productosdatos = [
    {id:1, nombre: "coca de 3 litros", idproveedor: 1, codigodebarras: 20055097, preciodeventa: 45.50, importe: 45.50},
    {id:2, nombre: "chokis", idproveedor: 2, codigodebarras: 20012516, preciodeventa: 24, importe: 24},
    {id:3, nombre: "pan blanco chicho", idproveedor: 3, codigodebarras: 20018648, preciodeventa: 36, importe: 36},
    {id:4, nombre: "leche de carton de litro", idproveedor: 4, codigodebarras: 20014855, preciodeventa: 38, importe: 38},
    {id:5, nombre: "pepsi de 3 litros", idproveedor: 5,codigodebarras: 20045481, preciodeventa: 44.50, importe: 44.50},
    {id:6, nombre: "coca de 600", idproveedor: 1,codigodebarras: 20048712, preciodeventa: 20.50, importe: 20.50},
    {id:7, nombre: "trikitrakes", idproveedor: 2, codigodebarras: 20054648, preciodeventa: 23, importe: 23},
    {id:8, nombre: "pan blanco grande", idproveedor: 3, codigodebarras: 20045418, preciodeventa: 46, importe: 46},
    {id:9, nombre: "leche de carton de litro deslactosada", idproveedor: 4, codigodebarras: 20015861, preciodeventa: 37, importe: 37},
    {id:10, nombre: "pepsi de 600", idproveedor: 5, codigodebarras: 20045619, preciodeventa: 19.50, importe: 19.50},
    {id:11, nombre: "coca de vidrio retornable", idproveedor: 1, codigodebarras: 20018512, preciodeventa: 32, importe: 32},
    {id:12, nombre: "arcoiris", idproveedor: 2, codigodebarras: 20048526, preciodeventa: 25, importe: 25},
    {id:13, nombre: "pan integral grande", idproveedor: 3, codigodebarras: 20014862, preciodeventa: 44, importe: 44},
    {id:14, nombre: "leche de galon", idproveedor: 4, codigodebarras: 20014852, preciodeventa: 56, importe: 56},
    {id:15, nombre: "pepsi de 1.5", idproveedor: 5, codigodebarras: 20046545, preciodeventa: 21.50, importe: 21.50},
    {id:16, nombre: "coca de 500 ml", idproveedor: 1,codigodebarras: 20048541, preciodeventa: 18, importe: 18}
];

const inventariodatos = [
  { idProducto: 1, idprovedor: 1, cantidad: 10, nombre: "coca de 3 litros"},
  { idProducto: 2, idprovedor: 1, cantidad: 23, nombre: "coca de 600 ml"},
  { idProducto: 3, idprovedor: 1, cantidad: 60, nombre: "coca de vidrio retornable"},
  { idProducto: 4, idprovedor: 1, cantidad: 12, nombre: "coca de 500 ml"},
  { idProducto: 5, idprovedor: 2, cantidad: 1, nombre: "chokis"},
  { idProducto: 6, idprovedor: 2, cantidad: 34, nombre: "trikitrakes"},
  { idProducto: 7, idprovedor: 2, cantidad: 34, nombre: "galletas arcoiris"},
  { idProducto: 8, idprovedor: 3, cantidad: 67, nombre: "pan blanco chico"},
  { idProducto: 9, idprovedor: 3, cantidad: 12, nombre: "pan blanco grande"},
  { idProducto: 10, idprovedor: 3, cantidad: 50, nombre: "pan integral grande"},
  { idProducto: 11, idprovedor: 4, cantidad: 45, nombre: "leche de carton de litro"},
  { idProducto: 12, idprovedor: 4, cantidad: 29, nombre: "leche de carton de litro deslactosada"},
  { idProducto: 13, idprovedor: 4, cantidad: 47, nombre: "leche de galon"},
  { idProducto: 14, idprovedor: 5, cantidad: 50, nombre: "pepsi de 3 litros"},
  { idProducto: 15, idprovedor: 5, cantidad: 15, nombre: "pepsi de 600 ml"},
  { idProducto: 16, idprovedor: 5, cantidad: 32, nombre: "pepsi de 1.5"}
];

const usuarios1 = [
  {id:1 , nombre:"admin", password:"administrador"},
  {id:2, nombre:"usuario1", password:"kraken2354"},
  {id:3, nombre:"usuario2", password:"semar123"},
  {id:4, nombre:"usuario4", password:"Oscar123"},
]