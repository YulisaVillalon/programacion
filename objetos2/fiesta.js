import { stdin as input, stdout as output } from 'process';
import * as readline from 'readline/promises';
import Persona from "./persona.js";
import Agua from './bebidas/agua.js';
import Cerveza from './bebidas/cerveza.js';
import Pizza from './alimentos/pizza.js';

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

output.write('¡Vamos a ofrecer algo de beber!\n');

let horchata = new Agua('Horchata', 3000);
let cerveza = new Cerveza('Negra modelo', 10000);


if (await rl.question('Laura, ¿Quieres algo de beber? (si/no): ') == 'si') {
    let ans = await rl.question('¿Qué te gustaría beber? (cerveza/horchata): ')
    switch (ans) {
        case 'cerveza':
            cerveza.servir(333);
            break;

        case 'horchata':
            horchata.servir(250);
            break;

        default:
            output.write('No tenemos de eso, joven. Vaya al Oxxo entonces, joven.\n');
            break;
    }
}

let pedro = new Persona("Pedro", 30, "masculino", true);

output.write('¡Tocan la puerta. Es Pedro!\n');

pedro.description();

output.write('¡Muy bien. Ya somos suficientes para empezar a comer 7u7!\n');

output.write('Vamos a pedir una pizza entonces. ¿De cuál quieren? (Pizza Mexicana/Cuatro Quesos):\n');

let pizzaCuatroQuesos = new Pizza("Cuatro Quesos", "Chicago", "extra grande", 10);
let pizzaMexicana = new Pizza("Mexicana", "panpizza", "grande", 10);

if (await rl.question('¡Ya llegaron las pizzas! ' + invitado.name + ' ¿Vas a querer? (si/no): ') == 'si') {
    let ans = await rl.question('¿De cuál vas a querer? (Mexicana/Cuatro Quesos):')
    switch (ans.trim().toLowerCase()) {
        case 'mexicana':
            juan.servePizza(invitado, pizzaMexicana);
            break;

        case 'cuatro quesos':
            juan.servePizza(invitado, pizzaCuatroQuesos);
            break;

        default:
            output.write('Ya se acabó la pizzita, amixes </3 \n');
            break;
    }
}

output.write('Pedro quiere pizza mexicana');
juan.servePizza(pedro, pizzaMexicana);




// jajaja no hiciste nada XD
// hoy si se va a poder?

rl.close();
