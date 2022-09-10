import Agua from './agua.js';
import Bebida from './bebida.js';
import Cerveza from './cerveza.js';
import Persona from './persona.js'
import Pizza from './pizza.js'


let juan = new Persona("Juan", 25, "male", true);
let laura = new Persona("Laura", 19, "female", false);
let pedro = new Persona("Pedro", 30, "non binary", true);
let pizzaMexicana = new Pizza("Mexicana", "panpizza", "grande", 0);
let pizzaCuatroQuesos = new Pizza("Cuatro Quesos", "Chicago", "extra grande", 0);
let bebida = new Bebida(1000);
let cerveza = new Cerveza("Cerveza Oscura", 1000);
let horchata = new Agua("Agua de Horchata", 3000);
let jamaica = new Agua("Agua de Jamaica", 500);


console.log(pizzaMexicana.slices);
pizzaMexicana.description();

juan.saysHi(laura);

juan.isStarving();
laura.isStarving();

juan.cut(pizzaMexicana, 8);
pizzaMexicana.description();

juan.cut(pizzaMexicana, 16);
pizzaMexicana.description();

juan.eatLastSlice();
laura.eatLastSlice();

console.log(pizzaCuatroQuesos.slices);
pizzaCuatroQuesos.description();

laura.cut(pizzaCuatroQuesos, 10);
pizzaCuatroQuesos.description();

let rebanadas = 3;
for(let i = 0; i < rebanadas; i++){
    juan.servePizza(pedro, pizzaCuatroQuesos);
    console.log(`Pizza servida a Pedro: ${pedro.servedPizza}`);
}
pizzaCuatroQuesos.description();
pedro.eat(pizzaCuatroQuesos.name);
pedro.eatLastSlice();
pedro.eatFirstSlice();

bebida.restante();
bebida.servir(500);
bebida.restante();
bebida.servir(500);
bebida.restante();
bebida.servir(500);

cerveza.restante();
cerveza.servir(500);
cerveza.restante();
cerveza.servir(500);
cerveza.restante();
cerveza.servir(500);

horchata.restante();
horchata.servir(500);
horchata.restante();
horchata.servir(500);
horchata.restante();
horchata.servir(500);
horchata.restante();
horchata.servir(500);
horchata.restante();
horchata.servir(500);
horchata.restante();
horchata.servir(500);
horchata.restante();
horchata.servir(500);

jamaica.restante();
jamaica.servir(500);
jamaica.restante();
jamaica.servir(500);

