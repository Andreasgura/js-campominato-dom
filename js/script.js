
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
    let bomb = false;
    let point = 0
    for (let index = 0; index < 100; index++) {
        boxes = generateSquares(index + 1);
        elBoxContainer.appendChild(boxes);
        boxes.addEventListener('click', function () {
            if (bomb === true) {
                return;
            }
            if(arrayBombs.includes(index + 1)) {
                this.classList.add('end-game')
                console.log('hai perso. Il tuo punteggio è ' + point)
                bomb = true
            } else {
                this.classList.add('clicked')
                console.log(arrayBombs)
                point = point + 1
            }
            elBoxContainer.appendChild(boxes);
        }, {once: true} );

    }


};




function generateSquares(content) {
    let newElement = document.createElement("div");
    newElement.classList.add('square');
    newElement.innerHTML = `<span>${content}<span>`;
    return newElement;
}

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

