import Objeto from "./Objeto.js";
import Perro from "./Perro.js";

let miObjeto = new Objeto(5, "gato", "negro");
console.log("Tamaño: " + miObjeto.size + " Nombre: " + miObjeto.name + " Color: " + miObjeto.color)

miObjeto.existo();
miObjeto.hagoAlgo(2);

let perrito = new Perro("Dory", 5, "pequeño");
perrito.nickName();
perrito.generation();
perrito.getSize();