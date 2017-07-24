// JavaScript source code

var canvas;
var canvasContext;
var ballX = 50;

window.onload = function () {
    var fps = 30;

    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    // Refresh window
    setInterval(drawEverything, 1000 / fps);
}

function drawEverything() {
    ballX = ballX + 50;

    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height)
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(ballX, 200, 30, 30)
}