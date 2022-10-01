# Ciclos
Un ciclo es una manera de iterar una acción dentro de nuestro programa. Un ciclo puede ser "infinito" cuando la validación siempre es verdadera, por eso es importante saber cómo validar la salida. Existen diferentes ciclos para diferentes necesidades. Veremos ciclos do - while y for hasta que los aprendamos bien.
## Ciclo Do - While
Como lo dice el nombre, es "hacer algo hasta que" algo suceda, este "algo" es el término de validación de la salida del bloque.
### ej. 1
    Haz {
        Imprime el menú
    } (hasta que la opción sea "salir")
### ej 2.
    Haz {
        Carga publicaciones
    } (hasta que llegues al "final de la página")
## Ciclo for
El ciclo for es una plantilla de función que recibe tres argumentos y ejecuta un bloque hasta que se cumpla la condicional.
La estructura es la siguiente:
    for (iterador, condición, pasos_iterador){
        //todo
    }
donde:
**iterador**: Es el índice con el que vas a iniciar el conteo y el parámetro que se incremetará.
**condición**: Es la condición lógica que tiene que cumplirse (regresar true) para que pueda salir del ciclo
**pasos_iterador**: Es la cantidad de datos que el iterador se incremetará.
## Ej.
    for(let iterador = 0; iterador = 10; iterador++){
        console.log(`Ésta es la iteración ${iterador}`);
    }
Hagamos ejercicios.