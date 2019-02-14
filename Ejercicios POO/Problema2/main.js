import Reservacion from "./Reservacion.js";

let reservacion1 = new Reservacion("Carlos", "Normal", 1500, new Date(2019, 2, 10), 2);
reservacion1.informacionReservacion();

reservacion1.nombre = "Emilio"
console.log(reservacion1.nombre);

reservacion1.tipoHabitacion = "Suite"
console.log(reservacion1.tipoHabitacion);

reservacion1.costoDia = 2000;
console.log(reservacion1.costoDia);

reservacion1.diaInicio = new Date(2019, 2, 14);
console.log(reservacion1.diaInicio);

reservacion1.cantidadDias = 4
console.log(reservacion1.cantidadDias);

reservacion1.informacionReservacion();
