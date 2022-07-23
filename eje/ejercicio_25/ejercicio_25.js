palabraUsuario= prompt('Ingresa tu frase: ');
A=0;
E =0;
I=0;
O =0;
U =0;

for( i=0; i<palabraUsuario.length; i++)   {
    if(palabraUsuario[i]==='a'){
        A++;
      }
    
      
    if(palabraUsuario[i]==='e'){
          E++;
        }
        
     if(palabraUsuario[i]==='i'){
             I++;
            }
            
      if(palabraUsuario[i]==='o'){
                  O++;
                }
                
     if(palabraUsuario[i]==='u'){
                      U++;
                    }
}  









console.log(`La frase tiene ${A} caracteres "a" `);
console.log(`La frase tiene ${E} caracteres "e" `);
console.log(`La frase tiene ${I} caracteres "i" `);
console.log(`La frase tiene ${O} caracteres "o" `);
console.log(`La frase tiene ${U} caracteres "u" `);