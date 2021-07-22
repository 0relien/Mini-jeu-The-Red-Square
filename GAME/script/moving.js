"use strict";

const square = document.querySelector(".square");

const speed = 20;

document.addEventListener('keydown', keyValue);

let moves = {
    top : 0,
    left: 0
}

const keypress ={
    right : ["d", "D", "ArrowRight"],
    left : ["a", "A", "q", "Q", "ArrowLeft"],
    top : ["z", "Z", "w", "W", "ArrowUp"],
    bot : ["s", "S", "ArrowDown"]
}



function keyValue(e) {
    
    if (keypress.right.indexOf(e.key) !== -1) {
        moves.left = moves.left + speed
    }
    else if (keypress.bot.indexOf(e.key) !== -1) {
        moves.top = moves.top + speed
    }
    else if (keypress.left.indexOf(e.key) !== -1){
        moves.left = moves.left - speed
    }
    else if (keypress.top.indexOf(e.key) !== -1){
        moves.top = moves.top - speed
    }

    square.style.top = moves.top + "px";
    square.style.left = moves.left + "px";



    
}

  