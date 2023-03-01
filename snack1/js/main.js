'use strict';

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

let richiesta;

let numeri = 0;

for (let i = 0; i < 5; i++){
    richiesta = Number(prompt('inserisci numero'));
    numeri += richiesta;
}
 console.log(numeri)

 let listaNumeri = [];

 console.log(listaNumeri)
 while (listaNumeri.length < 5){
    richiesta = Number(prompt('inserisci numero'));
    listaNumeri.push(richiesta)
    numeri += richiesta;
 }

 console.log(numeri)
 console.log(listaNumeri)