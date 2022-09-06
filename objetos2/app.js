import Persona from './persona.js'
import Pizza from './pizza.js'

let juan = new Persona("Juan", 25, "male", true);
let laura = new Persona("Laura", 19, "female", false);
let pedro = new Persona("Pedro", 30, "non binary", true);
let pizzaMexicana = new Pizza("Mexicana", "panpizza", "grande", 0);
let pizzaCuatroQuesos = new Pizza("Cuatro Quesos", "Chicago", "extra grande", 0);


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
