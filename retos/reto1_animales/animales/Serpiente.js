import Animal from './Animal.js'

class Serpiente extends Animal {

    constructor(suelta,lengua,don,tamaño,color,edad,vida,movimiento){
        super(tamaño, color, edad, vida, movimiento);
        this.suelta = suelta;
        this.lengua = lengua;
        this.don = don;
    }

    reptar(){
        if (this.suelta == true) { 
            console.log (`¡Ésta serpiente está suelta y anda reptando por todos lados! D:`)
        } else {
            console.log (`Ésta serpiente no anda libre, así que tu tranqui`)
        }
    }

    sisear(){
        if (this.lengua == true) {
            console.log (`Ésta serpiente anda enseñando la lenguita, justo así :P porque es super amigable`)
        } else {
            console.log (`Ésta serpiente es más reservada y no va a sisear porque no vibras alto, amix`)
        }
    }

    convencer(){
        if (this.don == true) {
            console.log (`¡Omaiga! Te has encontrado con una serpiente con el Don de Lenguas y ahora estás bajo su poder :S`)
        } else {
            console.log (`Ésta serpiente te quiere como amigo y no como esclavo, así que se ha reservado el Don de Lenguas para otra víctima >:D`)
        }

    }

}

export default Serpiente 