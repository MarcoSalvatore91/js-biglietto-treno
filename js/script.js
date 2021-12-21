console.log('JS OK!');

/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/


// 1- Chiedere all'utente quanti chilometri dovrà percorrere
// 2- Chiedere l'età del passeggero
// 3- Controllare che siano inseriti solamente caratteri numerici
// 4- Calcolare il prezzo in base a quanti chilometri percorrerà
// 5- Applicare sconto del 20% per i minorenni
// 6- Applicare sconto del 40% per gli over 65
// 7- Prezzo finale in forma umana (massimo due decimali)


// 1- Chiedere all'utente quanti chilometri dovrà percorrere
const kilometer = parseInt(prompt ('Quanti km dovrai percorrere?', '20').trim());
// 2- Chiedere l'età del passeggero
const userAge = parseInt(prompt ('Quanti anni hai?', '30').trim());

console.log('kilometer: ', kilometer);
console.log('userAge: ', userAge);

// 3- Controllare che siano inseriti solamente caratteri numerici
//! Compilare correttamente i campi richiesti
if (isNaN(kilometer) || isNaN(userAge)) {
    alert("Attenzione! E' permesso inserire solamente caratteri numerici!");
} else  {

    // 4- Calcolare il prezzo in base a quanti chilometri percorrerà
    const price = (kilometer * 0.21);
    const underDiscount = (price - (price * 20 / 100));
    const overDiscount = (price - (price * 40 / 100));

    // 5- Applicare sconto del 20% per i minorenni
    if (userAge < 18) {
        console.log('Il prezzo del biglietto è di: ', underDiscount,'€');
        document.getElementById('ticket-price').innerText = `Il prezzo del biglietto scontato è di ${underDiscount}`;
    // 6- Applicare sconto del 40% per gli over 65
    } else if (userAge > 65) {
        console.log('Il prezzo del biglietto è di: ', overDiscount,'€');
        document.getElementById('ticket-price').innerText = `Il prezzo del biglietto scontato è di ${overDiscount}`;
    } else {
        console.log('Il prezzo del biglietto è di: ', price,'€');
        document.getElementById('ticket-price').innerText = `Il prezzo del biglietto è di ${price}`;
    }
}

// 7- Prezzo finale in forma umana (massimo due decimali)



