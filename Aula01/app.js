var nome = 'fatec';

let nome2 = 'fatec2';

console.log('nome2 é; ' + nome2);

console.log(`nome é: ${nome}`);

let numero1 = 11;
let numero2 = 12;

numero1 = 11;
numero2 = 12;
resultado = (numero1 - numero2);
console.log(`Resultado da subtração: ${numero1}`);

console.log(`Numero 1: ${(numero1)}`)
console.log(`Numero 2: ${(numero2)}`)
console.log(`Resultado da soma: ${(numero1 + numero2)}`);
console.log(`Resultado da subtração: ${(numero1 - numero2)}`);
console.log(`Resultado da multiplicação: ${(numero1 * numero2)}`);
console.log(`Resultado da divisão: ${(numero1 / numero2)}`);
console.log(`Resultado total: `);

for (let i = 0; i <= 100; i++){ 
    if (i % 2 != 0 ) {
        exit;
    }
    for (let j = 0; j <= 10; j++){
        total = i * j;
        console.log(`${(i)} x ${(j)} = ${(total)}`);
    }
    console.log(`--------------------`);
}