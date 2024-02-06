let cadena= 0;
/* do{

}while(confirm('Para salir presione cancelar')) */

let inputs = [];

while (true) {
    let input = prompt("Ingrese una cadena de texto o presione 'cancel' para salir:");
    if (input === null) {
        break;
    }
    inputs.push(input);
}

let concatenatedInputs = inputs.join(' - ');
document.write('Cadenas concatenadas: ' + concatenatedInputs);
console.log('Cadenas concatenadas: ' + concatenatedInputs);