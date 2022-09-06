import Persona from './persona.js'
import Pizza from './pizza.js'

let juan = new Persona("Juan", 25, "male", true);
let laura = new Persona("Laura", 19, "female", false);
let pizzaMexicana = new Pizza("Mexicana", "panpizza", "grande", 0);

console.log(pizzaMexicana.slices);
pizzaMexicana.description();

juan.saysHi(laura);

juan.isStarving();
laura.isStarving();

juan.cut(pizzaMexicana, 8);
pizzaMexicana.description();

juan.cut(pizzaMexicana, 16);
pizzaMexicana.description();

juan.eat();
laura.eat();

