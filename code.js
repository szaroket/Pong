// JavaScript source code

var canvas;
var canvasContext;

window.onload = function () {
    drawEverything();
}

function drawEverything() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height)
}