var A = parseInt(prompt("ingrese un valor"));
var B = parseInt(prompt("ingrsese un valor"));
var C = parseInt(prompt("ingrsese un valor"));


if(A>B && B>C)
 {
    console.log( "los números ingresados  son", A, B, C, " y organizados de forma descendente son", A,",", B,",", C, )
}
 else if (A > C && C > B)
{
    console.log( "los números ingresados  son", A, B, C, " y organizados de forma descendente son", A,",", C,",", B, )
}

else if (B > C && C > A)
 {
    console.log( "los números ingresados  son", A, B, C, " y organizados de forma descendente son", B,",", C,",", A, )
    
}
 else if (B>A && A > C) {
    console.log( "los números ingresados  son", A, B, C, " y organizados de forma descendente son", B,",", A,",", C, )
 
}
else if(C>A && A>B)
 {
    console.log( "los números ingresados  son", A, B, C, " y organizadosde forma descendente son", C,",", A,",", B, )
}
else (C>B && B>A)
{
    console.log( "los números ingresados  son", A, B, C, " y organizados de forma descendente son", C,",", B,",", A, )
  
}



