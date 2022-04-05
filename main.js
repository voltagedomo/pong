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
let rPaddleX = innerWidth - 25;
let rPaddleY = 100;
let arrowUpIsPressed = false;
let arrowdownIsPressed = false;
let keyWIsPressed = false;
let keySIsPressed = false;

// add event listeners
document.addEventListener(`keypress`, keypressHandler);


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

// paddle movement based on keypress
function keypressHandler(event) {
    console.log(event.code);
    if (event.code == `KeyW`) {
        lPaddleY -= 15;
    } else if (event.code == `KeyS`) {
        lPaddleY += 15;
    } else if (event.code == `Numpad8`) {
        rPaddleY -= 15;
    } else if (event.code == `Numpad5`) {
        rPaddleY += 15;
    }
}