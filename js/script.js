// il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: 
//il prezzo del biglietto è definito in base ai chilometri (0,21 euro al km)
//va applicato uno sconto del 20% per i minorenni 
//va applicato uno sconto del 40% per gli over 65
//l'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).     questo richiederà un minimo di ricerca

//Chiedere quanti chilometri all'utente
let kmNumber = parsInt(prompt('Dimmi quanti chilometri vuoi percorrere'));
console.log(kmNumber);
//chiedere età all'utente
let userAge = parsInt(prompt('Dimmi la tua età'));
console.log(userAge);
//generare prezzo finale
let finalePrice;

//elaborazione