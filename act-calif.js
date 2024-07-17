const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, introduce una calificación (0-10): ', (nota) => {
    nota = parseFloat(nota);

    if (nota >= 0 && nota < 3) {
        console.log("Muy deficiente");
    } else if (nota >= 3 && nota < 5) {
        console.log("Insuficiente");
    } else if (nota >= 5 && nota < 6) {
        console.log("Suficiente");
    } else if (nota >= 6 && nota < 7) {
        console.log("Bien");
    } else if (nota >= 7 && nota < 9) {
        console.log("Notable");
    } else if (nota >= 9 && nota <= 10) {
        console.log("Sobresaliente");
    } else {
        console.log("Calificación no válida");
    }

    rl.close();
});
