let numbers = [];
let total = 0;

while (true) {
    let input = prompt("Ingrese un numero o presione 'cancel' para salir:");
    if (input === null) {
        break;
    }

    let number = parseFloat(input);
    if (isNaN(number)) {
        alert("Numero invalido, ingrese un numero.");
        continue;
    }

    numbers.push(number);
    total += number;
}
document.write('Suma total: ' + total);
console.log('Suma total: ' + total);