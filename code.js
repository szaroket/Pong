// JavaScript source code

var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 4;
var ballRadius = 10;
var paddle1Y = 200;
var paddle2Y = 200;
var paddle1X = 10;
var paddle2X = 770;
var paddleHeight = 150;
var paddleWidth = 20;

window.onload = function () {
    var fps = 30;

    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    // Refresh window
    setInterval(callBoth, 1000 / fps);

    // Set paddle's position value whenever mouse move
    canvas.addEventListener('mousemove',
        function (evt) {
            var mousePos = calculateMousePos(evt);
            paddle1Y = mousePos.y - (paddleHeight/2);
        });
}
function moveEverything() {
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

    if (ballX < ballRadius) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballX > (canvas.width - ballRadius)) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballY < ballRadius) {
        ballSpeedY = -ballSpeedY;
    }
    if (ballY > (canvas.height - ballRadius)) {
        ballSpeedY = -ballSpeedY;
    }
}

function drawEverything() {
    colorRect(0, 0, canvas.width, canvas.height, 'black')
    colorRect(paddle1X, paddle1Y, paddleWidth, paddleHeight, 'white')
    colorRect(paddle2X, paddle2Y, paddleWidth, paddleHeight, 'white')

    colorCircle(ballX, ballY, ballRadius, 'white');
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

function calculateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
}