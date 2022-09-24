class Persona {
    constructor(name, age, gender, hungry) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hungry = hungry;
        this.servedPizza = [];
    }

    description(){
        let desc = `${this.name} es ${this.gender} de ${this.age} que ${(this.hungry)?'tiene hambre ':'no tiene hambre '}`;
        console.log(desc);
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
        let msg = (pizza.divide(numSlices)) ? `${this.name} dividió la pizza ${pizza.name} en ${numSlices} rebanadas ${pizza.size}` : `${this.name} no pudo dividir la pizza porque ya está dividida en ${pizza.slices} rebanadas`;
        console.log(msg);
    }


    servePizza(persona, pizza) {
        if (pizza.getASlice() == true) {
            persona.servedPizza.push(pizza.name);
        console.log(`${this.name} le sirvió pizza ${pizza.name} a ${persona.name}`);
        } else {
            console.log("No hay más pizza");
        }
    }

    eat(type){ 
        let indice = this.servedPizza.indexOf(type);
        console.log(indice)
        if(indice != -1) {
            this.servedPizza.splice(indice, 1);
            console.log(`${this.name} se come una rebanada de ${type} antes de que se enfríe y le quedan ${this.servedPizza.length}`);
        } else {
            console.log(`No te han servido pizza ${type}`);
        }
    }

    eatFirstSlice() {
        if (this.servedPizza.length > 0) {
            let slice = this.servedPizza.shift();
            console.log(`${this.name} se come una rebanada de ${slice} antes de que se enfríe y le quedan ${this.servedPizza.length}`);
        } else {
            console.log(`${this.name} no tienes ninguna rebanada`);
        }
    }

    eatLastSlice() {
        if (this.servedPizza.length > 0) {
            let slice = this.servedPizza.pop();
            console.log(`${this.name} se come una rebanada de ${slice} y le quedan ${this.servedPizza.length}`);
        } else {
            console.log(`${this.name} no tienes ninguna rebanada`);
        }
    }

    askForPizza() {
        console.log(this.name + "pide una rebanada de pizza.");
    }

    askForBeer() {
        console.log(this.name + "pide una cerveza.");
    }

}

export default Persona;