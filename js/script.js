// il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: 
//il prezzo del biglietto è definito in base ai chilometri (0,21 euro al km)
//va applicato uno sconto del 20% per i minorenni 
//va applicato uno sconto del 40% per gli over 65
//l'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).     questo richiederà un minimo di ricerca

//Chiedere quanti chilometri all'utente
const kmNumber = parseInt(prompt('Dimmi quanti chilometri vuoi percorrere'));
console.log(kmNumber);

//chiedere età all'utente
const userAge = parseInt(prompt('Dimmi la tua età'));
console.log(userAge);

//generare prezzo base
let basePrice = kmNumber * 0.21;

//logica
let finalPrice;

if (userAge < 18) {
    // prezzo base - 20%
    sconto = (basePrice / 100) * 20;
    finalPrice = basePrice - sconto;
} else if (userAge > 65) {
    // prezzo base - 40%
    sconto = (basePrice / 100) * 40;
    finalPrice = basePrice - sconto;
} else {
    finalPrice = basePrice;
}

console.log(finalPrice);