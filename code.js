// JavaScript source code

var canvas;
var canvasContext;

window.onload = function () {
    var fps = 30;

    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    // Refresh window
    setInterval(callBoth, 1000 / fps);
}
function moveEverything() {

}

function drawEverything() {
    colorRect(0, 0, canvas.width, canvas.height,'black')
    colorRect(10, 200, 20, 150,'white')
    colorRect(770, 200, 20, 150, 'white')

    colorCircle(50, 100, 10, 'white');
}
function colorRect(x, y, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
}

function colorCircle(x, y, radius, color) {
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(x, y, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}

function callBoth() {
    drawEverything();
    moveEverything();
}