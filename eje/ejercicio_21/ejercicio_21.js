var c = parseInt(prompt("ingrese un valor "))
var j = 2;
var numerosPrim = [];

for (; j < c; j++) {

  if (primo(j)) {
    numerosPrim.push(j);
  }
  
}

console.log(numerosPrim);

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}