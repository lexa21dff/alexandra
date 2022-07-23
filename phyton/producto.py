def mostrarPrecioFinal(producto,precio,descuento):
    precioFinal=precio - descuento*precio/100
    print("el precio del " + producto +" es $"+str(precioFinal))
mostrarPrecioFinal("pantalon",40,20)
mostrarPrecioFinal("pantalon", 30, 15)