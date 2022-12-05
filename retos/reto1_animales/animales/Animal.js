class Animal {

    constructor(tamaño,color,edad,vida,movimiento){
        this.tamaño = tamaño;
        this.color = color;
        this.edad = edad;
        this.vida = vida;
        this.movimiento = movimiento;
    }

    vive(){
        if (this.vida == true) {
            console.log(`¡Ésta criatura esta vivaaaaaaa sobre tu hombro! >:D`)
        } else {
            console.log(`{RIP :'v`)
        }
    }

    muere(){
        if (this.vida == false) {
            console.log(`{RIP :'v`)
        } else {
            console.log(`¡Ésta criatura esta vivaaaaaaa sobre tu hombro! >:D`)
        }

    }

    desplaza(){
        if (this.movimiento == true) {
            console.log (`Éste animal puede moverse, amix`)
        } else {
            console.log (`Éste animal no puede moverse, amix`)
        }
    }




}

export default Animal
