import Pizza from './pizza.js'

class Persona {
    constructor(name, age, gender, hungry) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hungry = hungry;

    }

    isStarving() {
        let message = (this.hungry) ? `${this.name} se comería una vaca` : `${this.name} le teme al éxito`;
        console.log(message);
    }

    saysHi(persona) {
        let msg = `${this.name} saluda alegremente a ${persona.name}`;
        console.log(msg);
    }

    // recibe una pizza y la divide en rebanadas, guarda el número de rebanadas en el objeto pizza
    cut(pizza, numSlices) {
        let msg = (pizza.divide(numSlices))? `${this.name} dividió la pizza ${pizza.name} en ${numSlices} rebanadas ${pizza.size}` : `${this.name} no pudo dividir la pizza porque ya está dividida en ${pizza.slices} rebanadas`;
        console.log(msg);
    }


    eat() {
        let eating = (`${this.name} está saboreando su pizza como si no hubiera un mañana.`);
        console.log(eating);
    }

    askForPizza(name) {
        console.log(name + "pide una rebanada de pizza.");
    }

    deliver(name) {
        console.log(name + "se sirve una rebanada de pizza.");
    }
    // serve(object){
    //     (!object.isPizza()){
    //         object.pouring() //beer
    //     }
    // }
}

export default Persona;