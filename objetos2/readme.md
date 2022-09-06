# Trabajando con objetos
JavaScript es un lenguaje debilmente tipado, multiparadigma de uso general. Está orientado a ejecutar hacks o scripts dentro de aplicaciones más grandes. Nació para delegar procesamiento de datos del lado del servidor.
Existen dos paradigmas principales en la programación con JS: Orientada a objetos (OOP) y Programación funcional (FEP)
## Trabajando con objetos
Un objeto es la abstracción de la estructura descriptiva y funcional de un elemento operativo.
* La parte descriptiva de los objetos se llaman **atributos**, son las variables que definen al objeto.
* La parte funcional es llamada **métodos**, son las funciones que definen la comunicación con otros objetos y cómo éste objeto procesa la información que se le envía.

## Ejercicio
Juan tiene una fiesta, invitó a Pedro, a Laura y a Gabriel a comer. Pidieron pizza, Una pizza es Mexicana y la otra es Cuatro quesos.
La pizza mexicana se cortará en 8 pedazos, pero Laura pide que la de cuatro quesos se parta en 10 porciones.
Pedro trajo un cartón de chelas y el es el que las distribuye.
Todos pueden servirse las rebanadas que quieran y pedir las cervezas que quieran, siempre que alcancen. Nadie se puede servir más cerveza si aun tienen. Nadie puede comer pizza si no tiene rebanadas.
Necesitamos abstraer a los objetos persona y pizza y definir sus métodos.

### Definición del ojeto persona
**Atributos**
* Nombre
* Edad
* Género
* Hambre
**Métodos**
* Partir pizza
* Comer
* Pedir
* Servir pizza

### Definición del ojeto pizza
**Atributos**
* Nombre
* Tipo
* Tamaño
* No Rebanadas 
**Métodos**
* Dividir
* Servirse
