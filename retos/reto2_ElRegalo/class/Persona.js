class Persona {

    constructor(nombre,edad,sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.tieneObjeto = false;
    }

    obtiene(regalo){
        regalo.descripcion();
        this.tieneObjeto = true;
        regalo.pertenece = true;
    }

    regala(Persona, regalo){
        if (this.tieneObjeto && regalo.pertenece){
            Persona.tieneObjeto = true;
            this.tieneObjeto = false;
            console.log(`${Persona.nombre} recibió un regalo de ${this.nombre}.`)
        } else if(!this.tieneObjeto || !regalo.pertenece){
            console.log(`${Persona.nombre} no ha recibido ningún regalo.`)
        }
    }

    abre(Objeto) {
        Objeto.abrir();
    }

}

export default Persona;