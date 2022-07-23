class cuadrado:
    def __init__(self,ancho, alto):
        self.ancho = ancho
        self.alto = alto
    def calcularArea(self):
        area =self.ancho*self.alto
        return area
        
figura = cuadrado (10, 12)
print(figura.calcularArea())
print(figura.ancho)
class Persona:
    def __init__(self, nombre, apellido, dni, telefono):
        self.nombre=nombre
        self.apellido=apellido
        self.dni=dni
        self.telefono=telefono
    def __str__(self) :
        return self.nombre + self.apellido

class Empleado(Persona):
    def __init__(self, nombre, apellido, dni, telefono,salario):
        super().__init__(self, nombre, apellido, dni, telefono)
        self.salario = salario
    

perso = Persona ('lucas', 'moy', '2342233', '3445532')
# from Persona import Persona  para importar una clase de otro documento
class Cliente:
    def __init__(self, nombre, apellido, dni, telefono,categoria):
        super().__init__(self, nombre, apellido, dni, telefono)
        self.categoria = categoria


emp = Empleado('lucas', 'moy', '2342233', '3445532', 1000)
cli = Cliente ('lucas', 'moy', '2342233', '3445532', 'vip')

