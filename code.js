// JavaScript source code

var canvas;
var canvasContext;
var ballX = 400;
var ballY = 300;
var ballSpeedX = 10;
var ballSpeedY = 4;
var ballRadius = 10;
var paddle1Y = 200;
var paddle2Y = 200;
var paddle1X = 0;
var paddle2X = 790;
var paddleHeight = 150;
var paddleWidth = 10;
var player1Score = 0;
var player2Score = 0;
var winnigScore = 10;
var showWinScreen = false;

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
        //ballSpeedX = -ballSpeedX;
        if (ballY > paddle1Y &&
            ballY < paddle1Y + paddleHeight) {
            ballSpeedX = -ballSpeedX;

            var deltaY = ballY
                - (paddle1Y + paddleHeight / 2);
            ballSpeedY = deltaY * 0.35;
        } else {
            player2Score += 1;
            ballReset();
        }
    }
    if (ballX > (canvas.width - ballRadius)) {
        //ballSpeedX = -ballSpeedX;
        if (ballY > paddle2Y &&
            ballY < paddle2Y + paddleHeight) {
            ballSpeedX = -ballSpeedX;

            var deltaY = ballY
                - (paddle2Y + paddleHeight / 2);
            ballSpeedY = deltaY * 0.35;
        } else {
            player1Score += 1;
            ballReset();
        }
    }
    if (ballY < ballRadius) {
        ballSpeedY = -ballSpeedY;
    }
    if (ballY > (canvas.height - ballRadius)) {
        ballSpeedY = -ballSpeedY;
    }

    computerMovement();
}

function drawEverything() {
    colorRect(0, 0, canvas.width, canvas.height, 'black');

    if (showWinScreen) {
        canvasContext.font = "20px Georgia";
        canvasContext.fillStyle = 'white';
        canvasContext.fillText("Click to continue ", 100, 50);
        return;
    }

    colorRect(paddle1X, paddle1Y, paddleWidth, paddleHeight, 'white');
    colorRect(paddle2X, paddle2Y, paddleWidth, paddleHeight, 'white');

    colorCircle(ballX, ballY, ballRadius, 'white');

    canvasContext.font = "20px Georgia";
    canvasContext.fillText("Score: " + player1Score, 100, 50);
    canvasContext.fillText("Score: " + player2Score, 650, 50);
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

function ballReset() {
    if (player1Score >= winnigScore ||
        player2Score >= winnigScore) {

        player1Score = 0;
        player2Score = 0;
        showWinScreen = true;
    }
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    ballSpeedX = -ballSpeedX;
}

function computerMovement() {
    var paddle2Center = paddle2Y + paddleHeight / 2;
    if (paddle2Center < ballY-35) {
        paddle2Y += 6;
    } else if (paddle2Center > ballY+35) {
        paddle2Y -= 6;
    }
}