import { stdin as input, stdout as output } from 'process';
import * as readline from 'readline/promises';
import Persona from "./persona.js";

const rl = readline.createInterface({ input, output });

let juan = new Persona("Juan", 28, "masculino", true);

let invitado = new Persona("", 0, "", false);

output.write('*** Bienvenido a la fiesta de Juan ***\n');

output.write('Vamos a conocerte un poco, platícame\n');
invitado.name = await rl.question('¿Cómo te llamas?: ');
invitado.age = await rl.question('Cuál es tu edad?: ');
invitado.gender = await rl.question('Niño o niña? ');
invitado.hungry = (await rl.question('Hambre o qué (si/no): ') == 'si');
invitado.description();

output.write('Oh, mira, ha llegado Laura!!');
let laura = new Persona('Laura', 21, 'mujer', false);
laura.description();

(await rl.question('¿Quieres saludar a Laura? (si/no): ') == 'si') && invitado.saysHi(laura);

rl.close();