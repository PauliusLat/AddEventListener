"use strict";

let HTML = ``;
for(let i = 0; i<4; i++){
HTML+= '<div class="btn" data-nr="0">Paspaudimai: </div>';
}

document.querySelector('body').innerHTML = HTML;

const butonsai = document.querySelectorAll('.btn');
for (let i = 0; i < butonsai.length; i++) {
    butonsai[i].addEventListener("mousemove", increment);
}
function increment(event) {
    const button = event.target;
    let nr = parseInt(button.dataset.nr);
    button.dataset.nr = nr+1;
    button.innerText = button.dataset.nr;
    
}