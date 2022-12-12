import Persona from './Persona.js'

class Regalo {

    constructor(tamaño,color, nombre){
        this.tamaño = tamaño;
        this.color = color;
        this.nombre = nombre;
        this.abierto = false;
        this.pertenece = false;
    }

    abrir(){
        if(!this.abierto){
            this.abierto = true;
            console.log(`¡Soy un ${this.nombre}!`)
        }
        else {
            console.log(`Ya me habías abierto. ¡Recuerda que soy un ${this.nombre}!`)
        }
    }

    descripcion(){
        console.log(`Soy un regalo ${this.color} y ${this.tamaño}`);
    }
}

export default Regalo;