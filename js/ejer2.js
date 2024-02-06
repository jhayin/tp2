let nota = 0;
do {
    const nota = prompt('Ingrese la nota: ');
    if(nota <= 10 && nota >= 0){
        switch (nota) {
            case "0":
                document.write(`Muy deficiente ${nota}<br/>`);
                console.log("Deficiente");
                break;
    
            case "1":
                document.write(`Muy deficiente ${nota}<br/>`);
                console.log("Deficiente");
                break;
            case "2":
                document.write(`Muy deficiente ${nota}<br/>`);
                console.log("Deficiente");
                break;
    
            case "3":
                document.write(`Insuficiente ${nota}<br/>`);
                break;
            case "4":
                document.write(`Insuficiente ${nota}<br/>`);
                break;
            case "5":
                document.write(`Suficiente ${nota}<br/>`);
                break;
            case "6":
                document.write(`Suficiente ${nota}<br/>`);
                break;
    
            case "7":
                document.write(`Bien ${nota}<br/>`);
                break;
    
            case "8":
                document.write(`Notable ${nota}<br/>`);
                break;
    
            case "9":
                document.write(`Notable ${nota}<br/>`);
                break;
    
    
            case "10":
                document.write(`Sobresaliente ${nota}<br/>`);
                break;
        }
    }else if(nota >10 || nota< 0){
        document.write('La nota debe estar entre 0 y 10<br/>');
    }else{
        document.write('No se ingreso un numero<br/>');
    }
} while (confirm('desea ingresar otra vez un numero?'))