arreglo = ['banana','melon','sandia','pera']
arreglo.reverse() #MUESTRA LOS VALORES DE MANERA INVERTIDA
arreglo.remove("melon") #elimina este elemento de arreglo
arreglo.append("kiwi") # agrega un elemento
for fruta in arreglo:
    #fruta.endswith(a) muuestra las frutas que terminan en a
    if fruta.endswith('a'):
        print("la fruta es: " + fruta)
    if fruta == 'sandia':
        break

texto = "hola mundo"
for letra in texto:
    print(letra)

for numero in range(2, 10):
    if (numero>8):
        print(numero)


