import Animal from './Animal.js'

class Gato extends Animal {

    constructor(maullido,garras,sueño,odio,tamaño,color,edad,vida,movimiento){
        super(tamaño, color, edad, vida, movimiento);
        this.maullido = maullido;
        this.garras = garras;
        this.sueño = sueño;
        this.odio = odio;
    }

    maullar(){
        if (this.maullar == true) {
            console.log (`Un hermoso michi quiere comunicarse contigo :3`)
        } else {
            console.log (`Un hermoso michi te está ignorando LOL`)
        }

    }

    escalar(){
        if (this.garras == true) {
            console.log (`Éste michi tiene garras y puede treparse donde sea B)`)
        } else {
            console.log (`Éste michi no podrá trepar, pero puedes abrazarlo porque no puede rasguñarte <3`)
        }

    }

    dormir(){
        if (this.sueño == true) {
            console.log (`Éste michi tiene sueñeeeto y quiere mimir`)
        } else {
            console.log (`Éste michi no tiene ni una pisca de sueño y ya le tronó la tacha, así que ¡a jugar! >:D`)
        }

    }

    odiar(){
        if (this.odio == true) {
            console.log (`Éste michi te odia alv, toma tus precauciones de noche... Mientras duermes O.O`)
        } else {
            console.log (`Éste michi te ama y ronrronea solo para ti <3`)
        }
    }
}

export default Gato