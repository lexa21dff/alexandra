
n = parseInt(prompt("ingrese un numero ")) 
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

























