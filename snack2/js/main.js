'use strict';

// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

let numberInput = Number(prompt('inserisci un numero')); //input numero

if (numberInput % 2 === 0){                     //se il numero è divisibile per 2
    console.log(numberInput);                   //stampo il numero
} else {                                        //altrimenti
    console.log(numberInput += 1);              //stampo il numero +1
};