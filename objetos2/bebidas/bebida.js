// cantidad en litros
// Método servir. Sirve la cantidad especificada

class Bebida {
    constructor (cantidad){
        this.cantidad = cantidad;
    }

    servir(ml){
        if (this.cantidad >= ml){
            this.cantidad -= ml;
            this.restante();
        } else {
            console.log(`No hay bebida suficiente.`);
        }
    }

    restante(){
        console.log(`Quedan ${this.cantidad} ml`);
    }
}

export default Bebida