const square = document.querySelector(".square");
const area = document.querySelector(".area")

const speed = 30;

const smoothing = 200;

square.style.transitionDuration = smoothing + "ms"

document.addEventListener('keydown', keyValue);

let moves = {
    top : 0,
    left: 0
}

const keypress ={
    right : ["KeyD", "ArrowRight"],
    left : ["KeyA", "KeyQ", "ArrowLeft"],
    top : ["KeyZ", "KeyW", "ArrowUp"],
    bot : ["KeyS", "ArrowDown"]
}

let wait = 0;
let start = 0;

function keyValue(e) {

    if(e.code == "Space" && start == 0){
        start = 1
        document.querySelector(".overlay").classList.add("viewoff")
        document.querySelector(".overlay>.start").classList.add("titlestart")
    }

    if (wait  == 0 && start == 1){
        wait = 1
        console.log(e.code)

        var areaStyle = window.getComputedStyle(area);
        var areaWidth = parseInt(areaStyle.width, 10);
        var positionAreaX = positionArea.clientX + areaWidth

        var areaHeight = parseInt(areaStyle.height, 10);
        var positionAreaY = positionArea.clientY + areaHeight

        if (keypress.right.indexOf(e.code) !== -1 && positionAreaX > positionSquare.clientX + 20) {
        moves.left = moves.left + speed
        }
        else if (keypress.bot.indexOf(e.code) !== -1 && positionAreaY > positionSquare.clientY + 20) {
            moves.top = moves.top + speed
        }
        else if (keypress.left.indexOf(e.code) !== -1  && positionArea.clientX + 20 < positionSquare.clientX){
            moves.left = moves.left - speed
        }
        else if (keypress.top.indexOf(e.code) !== -1){
            moves.top = moves.top - speed
        }

        square.style.top = moves.top + "px";
        square.style.left = moves.left + "px";

        
        
        
        setTimeout( () =>{
            positions2();
            wait = 0;
        }, smoothing)
    }
}