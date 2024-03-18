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


let elBtnPlay = document.getElementById('playbtn')
let elBoxContainer = document.getElementById('box-container')
elBtnPlay.addEventListener('click', function(){
    elBoxContainer.innerHTML = '';
    let boxes;
    for (let index = 0; index < 100; index++) {
        boxes = generateSquares(index + 1); 
        elBoxContainer.appendChild(boxes);
        boxes.addEventListener ('click', function () {
            this.classList.add('clicked')
            console.log(index + 1)
            elBoxContainer.appendChild(boxes);   
        });
        
    }
    

});




function generateSquares(content) {
    let newElement = document.createElement("div");
    newElement.classList.add('square');
    newElement.innerHTML = `<span>${content}<span>`;
    return newElement;
}

function isOdd(n) {
    if (n % 2 === 0) {
        return true
    } else {
        return false
    }
}