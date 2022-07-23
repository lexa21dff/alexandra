class Animales {
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    cantar(){
        console.log("el"+this.nombre+"puede cantar");
    }
    saltar (){
        return '${this.nombre} puede saltar';
    }
}
class Gatos extends Animales{
    constructor (nombre,edad,color){
        super (nombre,edad);
        this.color=color;
    }
    mauillar(){
        console.log ("el gato maulla y tiene color"+this.color)
    }
}
let akira=new Gatos ("akira",40,"negro");
console.log(akira.saltar());
console.log(akira.cantar());
console.log(akira.mauillar());