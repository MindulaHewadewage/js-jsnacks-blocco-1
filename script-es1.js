// Dichiaro glie elementi 
const targetElement = document.getElementById('target');
const userNumbers = document.getElementById('user-numbers')


// Preparo la variabile
let sum = 0;

// Flag
let isValid = true;
// Genero il ciclo
for(let i = 0 ; isValid && i < 10 ; i++ ) {
    const number = parseInt(prompt('Scegli un numero da sommare'));
    // validazione
    if (isNaN(number)){
        isValid = false;
    }else{
    // faccio la somma
    sum += number;
    }

}

const message = isValid ? `La somma è ${sum}` : 'Valori non validi';
