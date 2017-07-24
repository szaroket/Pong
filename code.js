// JavaScript source code

var canvas;
var canvasContext;

window.onload = function () {
    var fps = 30;

    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    // Refresh window
    setInterval(drawEverything, 1000 / fps);
}

function drawEverything() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height)
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(10, 200, 20, 150)
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(770, 200, 20, 150)
}