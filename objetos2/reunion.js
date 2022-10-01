import { stdin as input, stdout as output } from 'process'
import * as readline from 'readline/promises'
import Persona from './persona.js';

const rl = readline.createInterface({ input, output });
game();


// funcion principal del juego
async function game() {
    let player = new Persona("", 0, "", false);
    rl.write(`¡Hola! ¡¡Bienvenido a la fiesta!!\n`)
    player.name = await rl.question('¿Cómo te llamas?: ')
    rl.write(`\n\t\t ..:: Bienvenido ${player.name} ::.. \n\n`)
    waiting();

    rl.write(`Ésta es la fiesta de Juan, nos da gusto que estés aquí. ¡Vas a conocer a gente muy divertida! \n\n`)
    waiting();

    rl.write(`¿Qué quieres hacer?\n\n`)
    waiting();

    rl.write(`\tMenú:\n`)
    let option = 2;
    do {
        let menu = `
        \t1. Preséntate.
        \n\n\tPara salir escribe 'Salir'\n > `;
        option = await rl.question(menu);
        selectOption(player, option.toString().trim());
    } while (option !== 'salir');
    rl.close();
}

// Ejecutar menú
function selectOption(player, option) {
    if (option == 'exit') { return 0; }
    switch (option) {

        case '1':
            console.log("Presentación: \n");
            presentarte(player);
            player.description();
            break;
            
        case 'salir':
            console.log(`¡Nos ha dado mucho gusto que vinieras! Hasta luego.`);

        default:
            console.log("Esa opción no existe, por favor ¡¡intenta otra!!");
            break;
    }
}

// start game
async function presentarte(player) {
    player.age =  await rl.question(`${player.name} nos encantaría saber qué edad tienes: \n`)
    player.gender =  await rl.question(`${player.name}, ¿Con qué género te identificas?: \n`)
    player.hungry =  ((await rl.question(`¿Tienes hambre? (si/no): \n`)).toString().trim().toLowerCase() == 'si');
    rl.close();
    return;
}


// Utils
function waiting() {
    let ms = 1000
    var currentTime = new Date().getTime();

    while (currentTime + ms >= new Date().getTime()) {
    }
}
