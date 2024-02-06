const edad= parseInt(prompt('Ingrese la edad: '));

if(edad >= 18){
    document.write('Puede conducir');
}else if(edad < 18 ){
    document.write('Es menor de edad');
}
