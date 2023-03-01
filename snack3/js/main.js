'use strict';

// Generatore di “nomi cognomi” casuali: 
// prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const listaNomi = ['pippo', 'pluto', 'gatto2', 'nome1', 'nome2', 'nome3', 'nome4'];
const listaCognomi = ['con1', 'con2', 'con3', 'con4', 'con5', 'con6', 'con7'];

const casuale = [];

for (let i = 0; i < 3; i++){
    const ranNum1 = Math.floor(Math.random() * listaNomi.length);
    const ranNum2 = Math.floor(Math.random() * listaCognomi.length);

    casuale.push(`${listaNomi[ranNum1]} ${listaCognomi[ranNum2]}`);
}

console.log(casuale);