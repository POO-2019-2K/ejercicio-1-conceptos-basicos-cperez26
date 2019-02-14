import Movimiento from './Movimiento.js';

let Cliente1 = new Movimiento('Carlos', 19, "Rio salado 90, Las palmas", 120000, 3, 2);
Cliente1.informacion();

Cliente1.nombre = 'Emilio';
console.log(Cliente1.nombre);
Cliente1.edad = 20;
console.log(Cliente1.edad);
Cliente1.domicilio = 'Republica de Paraguay 1719, Lomas de Santa Elena';
console.log(Cliente1.domicilio);
Cliente1.saldo = 200000;
console.log(Cliente1.saldo);
Cliente1.numeroDepositos = 2;
console.log(Cliente1.numeroDepositos);
Cliente1.numeroRetiros = 1;
console.log(Cliente1.numeroRetiros);

Cliente1.informacion();
Cliente1.retirar(50000);
Cliente1.informacion();
Cliente1.depositar(30000);
Cliente1.informacion();