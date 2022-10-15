import { stdin as input, stdout as output } from 'process';
import * as readline from 'readline/promises';

// creamos la interfaz
main();

// Escribir en consola 100 veces "Debo de hacer la tarea"
function cien() {
    for (let i = 0; i <= 10; i++) {
        console.log(`${i + 1}. Debo de hacer la tarea`);
    }
}

// chuleta: para escribir usas write, para preguntar usas question: Ejemplo:
// rl.write('hola\n');
// let ans = await rl.question('¿? : ');
// console.log(ans);
// rl.close();
// Tienes que recordar siempre el readline()

// Preguntar al usuario cuántas veces escribir hola, y numerarlas
async function holiwi() {
    let rl = readline.createInterface({ input, output });

    rl.write('¡Hola, dude! A continuación escribe el número de veces que quieres imprimir "Hola" en la consola, plis:\n');
    let ans = await rl.question('Ingresar número : ');

    for (let i = 0; i < ans; i++) {
        console.log(`${i + 1}. Hola`);
    }
    rl.close()
}
// Realizar un ejercicio que visualice los números del 1 al n en orden inverso. n es un número ingresado por el usuario.
async function decrece() {
    let rl = readline.createInterface({ input, output });

    rl.write('¡Súper! Ahora, ingresa un número al azar. El que más te guste. Todos los número previos a él se mostrarán:\n');
    let num = await rl.question('Ingresar número: ');

    for (let i = num; i > 0; i--) {
        console.log(`${i}`);
    }
    rl.close()
}

// Vamos a complicar los ejercicios. Realizar un ejercicio en el cual se visualice una cuenta de 1 al n, y a la vez, una cuenta inversa de n a 1.

async function inverseReverse() {
    let rl = readline.createInterface({ input, output });

    rl.write('¡Vamos muy bien! Elevemos un poco el nivel mostrando una lista de números al derecho y al revés. Ingresa un número al azar nuevamente:\n');
    let numReverse = await rl.question('Ingresar número: ');

    for (let i = 0; i < numReverse; i++) {
        console.log(`incremento: ${(i + 1)}`);
    }

    for (let j = numReverse; j > 0; j--) {
        console.log(`decremento: ${j}`);
    }

    for (let i = numReverse, j = 0; j < numReverse; i--, j++) {
        console.log(`j: ${(j + 1)} - i: ${(i)}`);
    }
    rl.close()
}
// TAREA: Más complicación!!, realizar un ejercicio en el cual se visualicen los números primos del 1 al 20.

function esPrimo(num){
    // El número es entero positivo
        let primo = false; // vamos a regresar esta variable después de las validaciones
        
        if(num >= 1){
            for (let i = 2; i < num; i++){ // itera de 2 a (n-1)
                if( num % i == 0 ){
                    return false;
                }
            }
            primo = true;
        }
    
        return primo;
    }
    
    function rangoPrimos(n1, n2){
        for(let i = n1; i<= n2; i++){
            console.log(`Número ${i}: ${esPrimo(i)}`);
        }
    }
    
    // rangoPrimos(1,20);
    
    // for (let esPrimo = num) {
    //     console.log (num % num = 0 && num % 1 = 0);
    // }
        
        
        
        
        
        
        
        //{
            //console.log (i = 1, j = num; i < j; i++, j++ );  
        //} else {
            //console.log (`${esPrimo}` no es un número primo.);  }
       
    // realizar una función que me de lineas incrementales de asteriscos
    // ej AsteriscosAsc(6): 
    // *
    // **
    // ***
    // ****
    // *****
    // ******
    
    // realizar una función que me de lineas decrmentales de asteriscos
    // ej AsteriscosDec(6): 
    //      *
    //     **
    //    ***
    //   ****
    //  *****
    // ******
    
    // realizar una función que me de lineas de asteriscos
    // ej AsteriscosTriangulo(6): 
    //      *
    //     ***
    //    *****
    //   *******
    //  *********
    // ***********
    
    // realizar una función que me de lineas de asteriscos
    // ej AsteriscosRombo(6): 
    //      *
    //     ***
    //    *****
    //   *******
    //  *********
    // ***********
    //  *********
    //   *******
    //    *****
    //     ***
    //      *

function main() {
    //    cien();
    //    holiwi();
    //    decrece();
    //    inverseReverse();
    //console.log(primo(1));
    sonPrimos(20);
}
