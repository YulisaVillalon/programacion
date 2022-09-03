class Perro {
    constructor(name, breed, size){
        this.name = name;
        this.breed = breed;
        this.size = size;
    }

    nickName(){
        console.log("Le gusta que lo llamen " + this.name + ".")
    }

    generation(){
            console.log("Es French Pooddle de " + this.breed + " generación.")
    }

    getSize(){
        switch(this.size){
            case "pequeño":
                console.log("Es de tamaño pequeño");
                break;
            case "mediano": 
                console.log("Es de tamaño mediano");
                break;
            case "grande":
                console.log("Es de tamaño grande");
                break;
            default: 
             console.log("No tienes lomito :(")
        }
    }

}

export default Perro;