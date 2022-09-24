import Bebida from './bebida.js'

class Cerveza extends Bebida {
    constructor(tipo, cantidad) {
        super(cantidad);
        this.tipo = tipo;
    }

    restante() {
        if (this.cantidad > 0) {
            console.log(`Quedan ${this.cantidad} ml de cerveza`)
        } else {
            console.log(`No hay más cerveza`)
        }
    }
}

export default Cerveza
