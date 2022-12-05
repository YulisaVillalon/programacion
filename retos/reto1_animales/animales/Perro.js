import Animal from './Animal.js'

class Perro extends Animal {

        constructor(ladrido,paseo,pelota,amor,tamaño,color,edad,vida,movimiento){
            super(tamaño, color, edad, vida, movimiento);
            this.ladrido = ladrido;
            this.paseo = paseo;
            this.pelota = pelota;
            this.amor = amor;
        }
    
        ladrar(){
            if (this.ladrido == true) {
                console.log (`¡Un lomito te está llamando para jugar! :3`)
            } else {
                console.log (`Éste lomito es tímido, pero no te agüites, amix.`)
            }
        }
    
        caminar(){
            if (this.paseo == true) {
                console.log (`Éste lomito quiere que lo saques a dar un paseo`)
            } else {
                console.log (`Éste lomito tiene weeeba y no tiene ganas de ir a caminar`)
            }
    
        }
    
        correr(){
            if (this.pelota == true) {
                console.log (`A éste lomito le gusta mucho correr tras la pelota`)
            } else {
                console.log (`A este lomito le gusta más quedarse en su camita que correr tras la pelota porque hace frío`)
            }
    
        }
    
        amar(){
            if (this.amor == true) {
                console.log (`Éste lomito mueve su colita porque te ama :3`)
            } else {
                console.log (`Éste lomito te gruñe porque no te conoce, ergo no te quiere`)
            }
            
        }

}

export default Perro