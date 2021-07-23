var positionArea = 0;
var positionSquare = 0;

function elementPosition (a) {
    var b = a.getBoundingClientRect();


    return {
        clientX: a.offsetLeft,
        clientY: a.offsetTop,
        viewportX: (b.x || b.left),
        viewportY: (b.y || b.top)
    }
}

document.addEventListener('keydown', positions)

function positions() {
    positionArea = elementPosition(area);
    positionSquare = elementPosition(square);
    console.log(positionSquare.clientX)
    
};

function positions2() {
    positionArea = elementPosition(area);
    positionSquare = elementPosition(square);
}


