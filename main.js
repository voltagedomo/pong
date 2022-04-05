// Pong by Alex

// setting up canvas
let cnv = document.getElementById(`myCanvas`);
let ctx = cnv.getContext(`2d`);
cnv.height = innerHeight - 2;
cnv.width = innerWidth - 2;

// global variables
let circleX = 20;
let circleY = 20;
let ballSpeed = 1;
let lPaddleX = 25;
let lPaddleY = 100;
let rPaddleX = 1260;
let rPaddleY = innerWidth - 20;
console.log(innerWidth);

// main function: drawing pong ball and paddles
requestAnimationFrame(pong);
function pong() {
    //draw background to erase history
    ctx.fillStyle = `black`;
    ctx.fillRect(0, 0, innerWidth, innerHeight);

    // draw pong ball
    ctx.fillStyle = `red`;
    ctx.beginPath();
    ctx.arc(circleX, circleY, 5, Math.PI * 2, 0);
    ctx.fill();

    // draw left paddle
    ctx.fillRect(lPaddleX, lPaddleY, 7, 60);
    // draw right paddle
    ctx.fillRect(rPaddleX, rPaddleY, 7, 60);

    requestAnimationFrame(pong);
}