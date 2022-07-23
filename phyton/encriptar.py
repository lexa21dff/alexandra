#archivo = open('texto.txt', 'a')
#archivo.write('prueba de guardado en el archivo')
#archivo.close()

#archivo =  open('texto.txt', 'r')
#print(archivo.read())

def encriptar (texto):
    print('el texto a encriptar es: ' + texto)
    textoFinal = ''
    for letra in texto :
        ascii = ord(letra)
        ascii += 1
        textoFinal += chr(ascii)
    return textoFinal

def desencriptar(texto):
    print('el texto a desencriptar es: ' + texto)
    textoFinal = ''
    contador = 0
    for letra in texto :
        if contador % 2 == 0:
            textoFinal += letra
        contador += 1
    return textoFinal

encriptar('prueba de texto')

def encriptarArchivo(rutaArchivo):
    archivo = open(rutaArchivo, 'r')
    texto = archivo.read()
    archivo.close()
    textoEncriptado =  encriptar(texto)

    archivo = open(rutaArchivo, 'w')
    archivo.write(textoEncriptado)
    archivo.close()
    print(' el archivo se encripto correctamente')

encriptarArchivo()

def desencriptarArchivo(rutaArchivo):
    archivo = open(rutaArchivo, 'r')
    texto = archivo.read()
    archivo.close()
    textoDesencriptado =  desencriptar(texto)

    archivo = open(rutaArchivo, 'w')
    archivo.write(textoDesencriptado)
    archivo.close()
    print(' el archivo se desencripto correctamente')

desencriptarArchivo()
respuestaEoD =input('presione "E" para encriptar, o "D" para desencriptar ')
rutaArchivo = input('ingrese la ruta del archivo')

if respuestaEoD == 'E':
    encriptarArchivo(rutaArchivo)
else:
    desencriptarArchivo(rutaArchivo)
# ord("H")lo convierte en el numero decimal 
numero = ord("h")
print(numero)
numero +=2
# chr(x) convierte un numero el la letra
letra = chr(numero)
print(letra)


    



