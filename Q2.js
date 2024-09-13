const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarLetraA(texto) {
    const count = (texto.toLowerCase().match(/a/g) || []).length;
    
    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vez(es) na string.`);
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}

rl.question('Informe uma string: ', (texto) => {
    contarLetraA(texto);
    rl.close();
});
