let n = 30;
for(let i = 1; i <= n; i++) {
    let row = '';
    for(let j = 1; j <= i; j++) {
        row += i;
    }
    document.write(`${row}<br/>`);
    console.log(row);
}