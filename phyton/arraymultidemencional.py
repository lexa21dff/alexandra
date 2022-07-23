lat =34.5
lon =45.6
posicion =[lat, lon]
historial=[
    [34.5, 45.6, "2020/02/02 17:20:24"]
    [34.5, 46.3,"2020/02/02 17:20:24"]
    [34.5, 47.3, "2020/02/02 17:20:24"]
    [34.5, 47.3,"2020/02/02 17:20:24"]
    [34.5, 48.3, "2020/02/02 17:20:24"]
    [34.5, 49.3, "2020/02/02 17:20:24"]
  
]
indiceLongitud=0
indiceLatitud=1
indiceFecha=2
for cordenada in historial:
    print(cordenada[indiceFecha])

