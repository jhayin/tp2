const dniLetters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

while (true) {
    let input = prompt("Ingrese un numero de DNI presione 'cancel' para salir):");
    if (input === null) {
        break;
    }

    let number = parseInt(input);
    if (isNaN(number) || number < 0 || number > 99999999) {
        alert("DNI invalido. Ingrese un numero valido.");
        continue;
    }

    let remainder = number % 23;
    let letter = dniLetters[remainder];
    alert("La letra del DNI " + number + " es: " + letter);
}