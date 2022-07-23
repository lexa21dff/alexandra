a= parseInt(prompt("ingrese un numero  "))
b = parseInt(prompt("ingrese un numero "))
imprimir = []
do{
if (a < b){
   
    for (i =a; i<=b; i++){
        console.log(i)
        document.write (i)
      
    }

}else{

 for (t=a; t>=b; t--){
        console.log(t)
        document.write(t)   

    }



} 
z = parseInt(prompt("ingrese un numero para ver el pantalla "))
console.log(z)
 alert(z)
p =  prompt("desea seguir mostrando el pantalla si o no ")
if (p = 'si'){
    alert(z)  
} 


}while(p != 'no')

