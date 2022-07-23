MB = 1
Bi=8388608 
By=1048576 
Kb = 1024 
GB = 0.000976563 

document.write("opcion 1.MB")
document.write("opcion 2.bits")
document.write("opcion 3.bytes")
document.write("opcion 4.Kb")
document.write("opcion 5.Gb")

 
 opcion = parseFloat(prompt("ingresar opcion"))
do {
if  (opcion == 1){
x = parseFloat(prompt("ingresar valor MB"))
console.log(x, "MB equivale a")
r= MB* x

console.log(mbbi = r / Bi, "bits")
console.log(mbby = r / By,"bytes")
console.log(mbkb = r / Kb,"Kb")
console.log(mbgb = r /GB, "GB")
break
}
if  (opcion == 2){
x = parseFloat(prompt("ingresar valor bits"))
console.log(x, "bits equivale a")
r= Bi* x
console.loge(bimb = r / MB, "MB")
console.log(biby = r / By,"bytes")
console.log(bikb = r / Kb,"Kb")
console.log(bigb = r /GB, "GB")
break
}
if  (opcion == 3){
x = parseFloat(prompt("ingresar valor Bytes"))
console.log(x, "bytes equivale a")
r= By* x
console.log(bymb = r / MB, "MB")
console.log(bybi = r / Bi, "bits")
console.log(bykb = r / Kb,"Kb")
console.log(bygb = r /GB, "GB")
break
}
if  (opcion  == 4){
x = parseFloat(prompt("ingresar valor Kb"))
console.log(x, "kb equivale a")
r= Kb* x
console.log(kbmb = r / MB, "MB")
console.log(kbbi = r / Bi, "bits")
console.log(kbby = r / By,"bytes")
console.log(kbgb = r /GB, "GB")
break
}
if  (opcion == 5){
x = parseFloat(prompt("ingresar valor GB"))
console.log(x, "GB equivale a")
r= GB* x
console.log(gbmb = r / MB, "MB")
console.log(gbbi = r / Bi, "bits")
console.log(gbby = r / By,"bytes")
console.log(gbkb = r / Kb,"Kb")
break

} 
}while (opcion != 5)
