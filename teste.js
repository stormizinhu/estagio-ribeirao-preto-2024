// 1) Observe o trecho de código abaixo:
let indice = 13;
let soma = 0;
let k = 0;

while(k < indice) {
    k = k + 1;
    soma = soma + k;
}

console.log(soma);
// Ao final do processamento, qual será o valor da variável SOMA?
// Resposta: 91

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const argumento = parseInt(process.argv[2]);

function verificaFibonacci(numero) {
    let n1 = 0;
    let n2 = 1;
    let temp;

    while (n2 <= numero) {
        if (n2 === numero) {
            return true;
        }
        temp = n1;
        n1 = n2;
        n2 = temp + n2;
    }
    return false;
}

switch (true) {
    case (process.argv.length !== 3):
      console.log("Por favor, forneça um único número como argumento.");
      break;
    case (isNaN(argumento)):
      console.log("O argumento fornecido não é um número válido.");
      break;
    default:
      if (verificaFibonacci(argumento)) {
        console.log(`${argumento} PERTENCE à sequência de Fibonacci`);
      } else {
        console.log(`${argumento} NÃO pertence à sequência de Fibonacci`);
      }
}

// 3) Descubra a lógica e complete o próximo elemento:

// a) 1, 3, 5, 7, ___
function logica1() {
    let numero = 1;
    for (let i = 0; i < 5; i++) { 
        console.log(numero); 
        numero += 2;
    }
}

logica1();
// Resposta: 9

// b) 2, 4, 8, 16, 32, 64, ____
function logica2() {
    let numero = 2;
    for (let i = 0; i < 7; i++) { 
        console.log(numero); 
        numero *= 2;
    }
}

logica2();
// Resposta: 128

// c) 0, 1, 4, 9, 16, 25, 36, ____
function logica3() {
    for (let i = 0; i < 7; i++) { 
        console.log(i * i);
    }
}

logica3();
// Resposta 49

// d) 4, 16, 36, 64, ____
function logica4() {
    for (let i = 2; i <= 10; i += 2) { 
        console.log(i * i);
    }
}

logica4();
// Resposta: 100

// e) 1, 1, 2, 3, 5, 8, ____
function logica5() {
    let zero = 0;
    let a = 1;
    let b = 1;
    console.log(zero);
    console.log(a);
    console.log(b);

    for (let i = 0; i < 5; i++) { 
        let c = a + b; // Calcula o próximo número na sequência
        console.log(c);
        a = b; // Atualiza o valor de 'a' para o próximo número na sequência
        b = c; // Atualiza o valor de 'b' para o próximo número na sequência
    }
}

logica5();
// Resposta: 13

// f) 2,10, 12, 16, 17, 18, 19, ____
// Resposta: 200. Todos os números começam com a letra "D"

// 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

// Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

// Resposta: Essa resolução pode ser feita em apenas uma ida:
// 1) ligar o interruptor 1 e esperar um pouco.
// 2) Desligar o interruptor 1 e ligar o 2.
// 3) Ir para a outra sala.
// 4) Ver qual lâmpada está ligada devido ao interruptor 2.
// 5) Ao tocar nas outras lâmpadas, a que estiver quente pertence ao interruptor 1 e a fria ao 3.

// 5) Escreva um programa que inverta os caracteres de um string.

const palavra = process.argv[2];

function inverterString(string) {
    let invertida = '';
    for (let i = string.length - 1; i >= 0; i--) {
        invertida += string[i];
    }
    return invertida;
}

const palavraInvertida = inverterString(palavra);
console.log(`Original: ${palavra} - Invertida: ${palavraInvertida}`);