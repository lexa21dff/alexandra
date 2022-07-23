 
 guai= []
 num = parseInt(prompt("ingrese un numero "))
 for ( let i = 2 ; num > 1; i++)
 {
   contador = 0  
    while(num % i == 0){
  contador++
  num = num /i;
  if (num % i == 0){
      if (contador>1 ){}

  }

 }
}
console.log(guai)