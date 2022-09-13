class Postre {
    constructor(cucharadas) {
        this.cucharadas = cucharadas;
        this.cucharadasRestantes = cucharadas;
        this.azucar = false; // bool
    }

    bite() {
        if (this.cucharadasRestantes > 0) {
            this.cucharadasRestantes--;
            this.empalagado();
        } else {
            console.log("No quedan más cucharadas.")
        }
    }

    // si cucharadasRestantes <= (cucharadas/3)
    empalagado() {
        if (this.cucharadasRestantes > (this.cucharadas / 3)) {
            console.log(`Aún no tienes diabetes. Sigue comiendo sin temor al éxito.`);
        } else {
            if (this.azucar == false) {
                console.log(`Ya llevas ${(this.cucharadas - this.cucharadasRestantes)}. Una cucharada más y tendrás diabetes >:D`)
                this.azucar = true;
            } else {
                console.log(`Sorry, ya tienes diabetes. Ahora tendrás que comer tu pie de chocolate.`);
            }
        }
    }

}

export default Postre;