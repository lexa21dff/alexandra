function Animal (genero){
    this.genero=genero
    this.especie=function(){
        console.log("es un animal")
    }
}
function Perro(nombre){
    this.nombre=nombre
    Animal.call(this,)

}
function Gato(nombre){
    this.nombre=nombre
    Animal.call(this,)
    
}
gato1 = new Gato ("bola nieve")
gato1.especie()
perro1= new ("kiara")
perro1.especie()