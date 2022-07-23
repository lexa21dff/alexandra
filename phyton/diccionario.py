diccionario ={  
    "programar": "programar es transformar el cafe en codigo",
    "POO":"programacion orientada a objetos",
    "MVC":"Modelo Vista Controlador"
}

print(diccionario["POO"])

numeros = {
    "0":"cero",
    "1":"uno",
    "2":"dos",
    "3":"tres",
    "4":"cuatro",
    "5":"cinco",
    "6":"seis",
    "7":"siete",
    "8":"ocho",
    "9":"nueve",
}

texto = input('ingrese un numero:')
textofinal = ''
for letra in texto:
    textofinal += numeros[letra] + ' '

print(textofinal)