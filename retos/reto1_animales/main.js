// Reto 1: Crea un objeto animal con los métodos vive, muere y desplaza
// Crea un objeto perro que herede de animal y que además ladre, camine y corra y ame
// Crea un objeto gato que herede de animal y además Maulle, escale, duerma y odie
//Crea un objeto serpiente que herede de animal y además repte, sisee y use "Don de Lenguas" para convencer

import Animal from "./animales/Animal.js";
import Gato from "./animales/Gato.js";
import Serpiente from "./animales/Serpiente.js";
import Perro from "./animales/Perro.js";

let Hutchison = new Gato ("pequeña", "negra", 2, true, true, true, true, false, false);
let Anacleto = new Serpiente ("grande", "verde", 4, true, true, true, true, true);
let Bruno = new Perro ("mediano", "café", 8, true, true, true, true, false, true);

Hutchison.maullar();
Hutchison.odio = false;
Hutchison.odiar();
Hutchison.odio = true;
Hutchison.odiar();

Anacleto.reptar();
Anacleto.don = false;
Anacleto.convencer();
Anacleto.don = true;
Anacleto.convencer();

Bruno.correr();
Bruno.amor = true;
Bruno.amar();
Bruno.amor = false;
Bruno.amar();


Hutchison.vida = true;
Hutchison.vive();

Anacleto.vida = false;
Anacleto.muere();

Bruno.movimiento = true;
Bruno.desplaza();
