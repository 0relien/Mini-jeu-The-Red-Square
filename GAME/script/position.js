function elementPosition (a) {
    var b = a.getBoundingClientRect();
    return {
        clientX: a.offsetLeft,
        clientY: a.offsetTop,
        viewportX: (b.x || b.left),
        viewportY: (b.y || b.top)
    }
}

document.addEventListener('keydown', function(){
    var positionArea = elementPosition(area);
    var positionSquare = elementPosition(square);
    // console.log(positions)
    console.log("Area Position")
    console.log(positionArea)
    console.log("Square Position")
    console.log(positionSquare)   
});

