/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


creo un div.grid   .d-flex-justify-coontent-center.align-items-center
dentro il div inserisco N volte una fz che mi genera un quadrato. ogni quadrato ha all'interno, sempre al centro (quindi aggiungo classi), un numero (o in generale qualcosa di scritto)

*/

let elBtnPlay = document.getElementById('playbtn');
let elBoxContainer = document.getElementById('box-container');
elBtnPlay.addEventListener('click', play );

function play() {
    elBoxContainer.innerHTML = '';
    let arrayBombs = [];
    console.log('vuoto' + arrayBombs)
    for (let index = 0; index < 16; index++) {
    const newBomb = generateUniqueRandomnumbers(1, 100, arrayBombs);
    arrayBombs.push(newBomb);
    }
    let boxes;
    for (let index = 0; index < 100; index++) {
        boxes = generateSquares(index + 1);
        elBoxContainer.appendChild(boxes);
        boxes.addEventListener('click', checkBomb, {once: true} );
        function checkBomb () {
            if(arrayBombs.includes(index + 1)) {
                this.classList.add('end-game')
                console.log('hai perso')
                boxes.disabled = true;
                boxes.removeEventListener('click', checkBomb );
            } else {
                this.classList.add('clicked')
                console.log(arrayBombs)
            }
            
            elBoxContainer.appendChild(boxes);
        };

    }


};




function generateSquares(content) {
    let newElement = document.createElement("div");
    newElement.classList.add('square');
    newElement.innerHTML = `<span>${content}<span>`;
    return newElement;
}

/*
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


se il numero (presente nello span) è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle

*/





function generateUniqueRandomnumbers(min, max, blacklist) {

    let randomNotincluded;
    let flag = false;

    while (flag === false) {
        randomNotincluded = Math.floor(Math.random() * (max - min + 1)) + min
        console.log('nel ciclo' + randomNotincluded)
        if (blacklist.includes(randomNotincluded) === false) {
            flag = true;
        }
    }
    return randomNotincluded;
}

