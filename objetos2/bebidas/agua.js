import Bebida from './bebida.js'

class Agua extends Bebida {
    constructor(tipo, cantidad) {
        super(cantidad);
        this.tipo = tipo;
    }

    restante() {
        if (this.cantidad > 0) {
            console.log(`Quedan ${this.cantidad} ml de agua`)
        } else {
            console.log(`No queda más ${this.tipo}`);
        }
    }
}

export default Agua