
nombretra = prompt("ingresar el nombre del trabajador")
horastra =prompt("ingresar las horas de trabajo")
tarifa = prompt("ingresar la tarifa determinada")

if (horastra<=35)
{
salario = horastra * tarifa
}
else 
{
    salario = 35* horastra+ ((horastra -35)*1.5*tarifa)
}

if (salario <= 2000 )
{
 impuesto = 0
}
 if (salario > 2000  <= 3500)
 {
     impuesto =( ( salario - 2000 ) * 0.20)
 }

 else
    {
        impuesto = ( ( 220 * 0.20) + ((salario - 3500) * 0.30 ))
}

salariototal= salario - impuesto

console.log("nombre ",nombretra, "horas ", horastra, "tarifa",tarifa , "salario bruto", salario, "impuestos", impuesto, "salario total",salariototal)