nombre = 'lucas'
nombre =' pedro'
edad = 30
texto ='hola mundo, soy ' + nombre + ' y tengo '+ str(edad)+' años'
print(texto)
nombree= input ('como te llamas')
print('hola '+ nombree )
edadd=int(input ('cuantos años tienes'))
esMayorDeEdad=edadd >= 18
if esMayorDeEdad:
    print('es mayor de edad')
else:
    print('es menor de edad')
edaad=int(input ('cuantos años tienes'))
puedePasarMas=edaad>=12
if puedePasarMas:
    print('usted puede pasar a la montaña rusa')
else:
    print( 'no puede pasar')

numero = int(input('ingrese un numero'))
if numero%2==0:
    print('el numero es par')
else:
    print('el numero es impar')
def mostrarPrecioFinal(producto,precio,descuento):
    precioFinal=precio - descuento*precio/100
    print("el precio del " + producto +" es $"+str(precioFinal))
mostrarPrecioFinal("pantalon",40,20)
mostrarPrecioFinal("pantalon", 30, 15)