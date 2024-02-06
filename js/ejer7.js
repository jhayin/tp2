let n = parseInt(prompt("Enter a number (max 50):"));
do{
    for(let i = n; i > 0; i--) {
        let row = '';
        for(let j = 1; j <= i; j++) {
            row += j;
        }
        console.log(row);

        
    }

}while(n<=50)



/* while (true) {
    let input = prompt("Ingrese un numero menor o igual a 50 o presione 'cancel' para salir:");
    if (input === null) {
        break;
    }

    let number = parseFloat(input);
    if (isNaN(number)) {
        alert("Numero invalido, ingrese un numero.");
        continue;
    }

    for (let i = n; i > 0; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        console.log(row);
    }
} */

/* do{
    let n = prompt("Ingrese un numero (max 50):");
    if(n<50){
        for(let i = n; i > 0; i--) {
            let row = '';
            for(let j = 1; j <= i; j++) {
                row += j;
            }
            console.log(row);
        }
    }else{
        alert("Numero invalido. El numero debe ser menor o igual a 50.");
    }
}while(n<50)
 */
