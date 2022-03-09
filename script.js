

// Mail
// Chiedi all’utente la sua email,
//     controlla che sia nella lista di chi può accedere,
//         stampa un messaggio appropriato sull’esito del controllo.


//declare array valid emails
const admins = ['pippo@gmail.com', 'paperino@yahoo.net', 'pluto@libero.it'];

//ask user email and set isValid variable with proper message
let userEmail = prompt('Enter your email');
let isValid = 'Invalid email';

//ask if useremail is equal to every index inside email array, if true change isValid variable with proper message, if not do nothing
for (let i = 0; i < admins.length; i++) {
    if (userEmail === admins[i]) {
        isValid = 'Valid email, welcome back';
    }
}

//log proper message, one time, outside of loop - standard message is invalid if email is not matching
console.log(isValid);



// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte ?
//     Se dobbiamo confrontare qualcosa che "cosa" ci serve ?



// let playerDice = Math.floor(Math.random() * 6) + 1;
// let computerDice = Math.floor(Math.random() * 6) + 1;   
// console.log(`Player dice: ${playerDice}`);
// console.log(`Computer dice: ${computerDice}`);
// console.log(`Max is: ${Math.max(playerDice, computerDice)}`);

//     if (playerDice > computerDice) {
//         console.log('YOU WIN!');
//     } else if (playerDice < computerDice) {
//         console.log('COMPUTER WIN, YOU LOSE!');
//     } else {
//         console.log('Even, play again!');
//     }

   

     
(function repeat() {
    let playerDice = Math.floor(Math.random() * 6) + 1;
    let computerDice = Math.floor(Math.random() * 6) + 1;
    console.log(`Player dice: ${playerDice}`);
    console.log(`Computer dice: ${computerDice}`);

    console.log(`Max is: ${Math.max(playerDice, computerDice)}`);

    if (playerDice > computerDice) {
        console.log('YOU WIN!');
    } else if (playerDice < computerDice) {
        console.log('COMPUTER WIN, YOU LOSE!');
    } else {
        console.log('Even, play again!');

    }
    if (playerDice === computerDice) {
        setTimeout(() => {
            repeat()
        }, 100)
    }
})()
