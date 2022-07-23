function nombre (a){
    return parseInt(a)
}
console.log(nombre(3))
function cuatro(hex){
    return(parseInt(hex, 16))
}
console.log(cuatro("A"))
n = cuatro("A")
let r
let m
let lista = []
do {
    r= parseInt(n/2)
    m =n%2
    n=r
    lista.push(m)
}while (r >0)
lista.reverse()
console.log(lista)
document.write(lista)

