import Contacto from "./Contacto.js";

let trabajador1 = new Contacto("Carlos Emilio, Cajero, 3131366022, cperez26@ucol.mx")
trabajador1.informacion();

trabajador1.nombre = `Emilio`;
console.log(trabajador1.nombre);
trabajador1.puesto = `Gerente`;
console.log(trabajador1.puesto);
trabajador1.telefono = `3133286161`;
console.log(trabajador1.telefono);
trabajador1.email = `carlos_emilio@hotmail.es`;
console.log(trabajador1.email);

trabajador1.informacion();