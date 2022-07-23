num1=72
num2=16
res=num1/num2
entero=Math.floor(res)
resul2=num2/entero


const maximoComunDivisor = (a, b) => {
  
  let temporal; 
  while (b !== 0) {
      temporal = b;
      b = a % b;
      a = temporal;
  }
  return a;
};