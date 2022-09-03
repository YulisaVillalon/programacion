// ojeto, tiene atributos, metodos
// atributos: tamaño, nombre, color
// metodos: decir que existe, hacer algo, getters y setters

//class: palabra reservada, indica el inicio de una clase
//clase: la definición general de objetos.
// instancia: es la especificación de una clase.
// ejemplo: la clase perro te hace pensar en un animal de 4 patas, que ladra
// la instancia es Dory, es una perrita blanca, anciana, caniche.


class Objeto {

    constructor(size, name, color){
        this.size = size;
        this.name = name;
        this.color = color;
    }

    existo(){
        console.log("¡Yo existo!");
    }

    hagoAlgo(veces){
        for (let i = 0; i < veces; i++){
            console.log("Esta es la vez número " + (i+1) + " que hago algo");
        }
    }
}

export default Objeto;


