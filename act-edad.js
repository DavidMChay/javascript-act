const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, introduce tu edad: ', (edad) => {
    edad = parseInt(edad);

    if (edad > 18) {
        console.log("Puedes conducir.");
    } else {
        console.log("No puedes conducir.");
    }

    rl.close();
});
