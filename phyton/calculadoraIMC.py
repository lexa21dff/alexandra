#calculadora IMC
#IMC=peso / (altura x altura)
# <19: delgadez
#entre 20 y 25 : normal
#entre 26 y 30 sobrepeso
# > de 30: obesidad
def calcularIMC(peso, alturaEnMetros):
    imc = peso /(alturaEnMetros * alturaEnMetros)
    return imc
def pedirElIMC():
    peso = int(input('ingrese su peso en kg '))
    alturaCM = int(input('ingrese su altura en cm '))
    alturaEnMetros = alturaCM / 100
    imc = calcularIMC(peso,alturaEnMetros)
    imc1 = peso /(alturaEnMetros * alturaEnMetros)
    print('su IMC es de '+ str(imc))
    if imc < 20:
        print('estado de delgadez')
    if imc >= 20 and imc < 26:
        print('peso normal')
    if imc >= 26 and imc < 30:
        print('estado de sobrepeso')
    if imc >= 30:
        print('estado de obesidad')
print('calcular el IMC de la primer persona')
pedirElIMC()
print('calcular el IMC de la segunda persona')
pedirElIMC()
print('calcular el IMC de la tercera persona')
pedirElIMC()
