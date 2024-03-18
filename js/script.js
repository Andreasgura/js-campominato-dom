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
/*

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
*/
// let blacklist = [1,3,5,7];
// let randomNmb = Math.floor(Math.random() * (7 - 1) ) + 1;
// let flag = false;
// if (blacklist.includes(randomNmb)){
//     console.log('è incluso' + randomNmb)
// } else {
//     flag = true
//     console.log(flag + ' non è incluso ' + randomNmb)
// };

let mylist = [1,3]
console.log(generateUniqueRandomnumbers (1, 6, mylist))

function generateUniqueRandomnumbers (min, max, blacklist) {

    let randomNotincluded;
    let flag = false;

    while (flag === false) {
        randomNotincluded = Math.floor(Math.random() * (max - min + 1) ) + min
        console.log('nel ciclo' + randomNotincluded)
        if (blacklist.includes(randomNotincluded) === false){
            flag = true;
        }
    }
    return randomNotincluded;
}