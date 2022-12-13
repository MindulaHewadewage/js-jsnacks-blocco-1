// Dichiaro glie elementi 
const targetElement = document.getElementById('target');
const userNumbers = document.getElementById('user-numbers')
let sum = document = document.getElementById('sum');

let numbers;
// Genero il ciclo
for(let i = 0 ; i < 10 ; i++ ) {
    let numbers = prompt('Scegli un numero da sommare');
    // stampo i numeri nella console
    console.log(numbers);

    // faccio la somma
    sum = numbers[i];
}

console.log('La somma è :' + sum);
