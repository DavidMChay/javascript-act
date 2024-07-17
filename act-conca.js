const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cadenas = [];

function pedirCadena() {
    rl.question('Introduce una cadena de texto (o "cancelar" para finalizar): ', (cadena) => {
        if (cadena.toLowerCase() === 'cancelar') {
            console.log(cadenas.join('-'));
            rl.close();
        } else {
            cadenas.push(cadena);
            pedirCadena();
        }
    });
}

pedirCadena();
