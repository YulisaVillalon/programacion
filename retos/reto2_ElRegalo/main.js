// Reto: Crear tres objetos: Hombre y mujer que hereden de persona y regalo que esté cerrado o abierto (método abrir).
// Debes de crear un método "regalar" que cambie el estado de "tiene objeto" de la clase humano.
// El método debe de comunicarse entre objetos para cambiar los estados

import Persona from "./class/Persona.js";
import Regalo from "./class/Regalo.js";

let Gabo = new Persona ("Gabo",37,"masculino");
let Kay = new Persona ("Kay",26,"femenino");
let regalo = new Regalo ("grande","verde", "ramen");

Gabo.obtiene(regalo);
Gabo.regala(Kay,regalo);
Gabo.abre(regalo);
Gabo.abre(regalo);