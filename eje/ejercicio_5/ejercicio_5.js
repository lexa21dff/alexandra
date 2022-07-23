//Elabore un programa que capture por teclado 3 números diferentes A, B, C, el sistema deberá decir cual es mayor cual es menor y cual es el intermedio. Realice todas las validaciones necesarias 
var A = parseInt(prompt("ingrese un valor"));
var B = parseInt(prompt("ingrsese un valor"));
var C = parseInt(prompt("ingrsese un valor"));







if(A>B && B>C)
 {
    console.log("el numero mayor es ", A,  "el numero intermedio ", B, "el numero menor es", C  );
}
 if (A > C && C > B)
{
    console.log("el numero mayor es ", A, "el numero intermedio ", C, "el numero menor es", B );  
}

if (B > C && C > A)
 {
    console.log("el numero mayor es ", B,  "el numero intermedio ", C, "el numero menor es", A );
}
 if (B>A && A > C) {
    
    console.log("el numero mayor es ", B, "el numero intermedio ", A, "el numero menor es", C );  
}
 if(C>A && A>B)
 {
    console.log("el numero mayor es ", C,  "el numero intermedio ", A, "el numero menor es", B  );
}
if (C>B && B>A)
{
    console.log("el numero mayor es ",C, "el numero intermedio ", B, "el numero menor es", A );  
}


