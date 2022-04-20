// Pong by Alex

// setting up canvas
let cnv = document.getElementById(`myCanvas`);
let ctx = cnv.getContext(`2d`);
cnv.height = innerHeight - 2;
cnv.width = innerWidth - 2;

// global variables
let mouseX, mouseY;
let circleX = 200;
let circleY = 105;
let ballSpeed = 0;
let player = {
    x: 25,
    y: 100,
    speed: 5,
    score: 0
}
let player2 = {
    x: innerWidth - 27,
    y: 100,
    speed: 5,
    score: 0
}
let keyIsPressed = false;

// add event listeners
document.addEventListener(`keypress`, movement);
document.addEventListener(`keypress`, gameStart);
document.addEventListener(`keypress`, stopMovement);

// MAIN FUNCTION: drawing pong ball and paddles
requestAnimationFrame(pong);
function pong() {
    // LOGIC
    // if player1 moving off screen, keep him on screen
    if (player.y < 5) {
        player.y = 5;
    } else if (player.y > innerHeight - 67) {
        player.y = innerHeight - 67;
    }

    // if player2 moving off screen, keep him on screen
    if (player2.y < 5) {
        player2.y = 5;
    } else if (player2.y > innerHeight - 67) {
        player2.y = innerHeight - 67;
    }

    // if ball moves off screen, move back on screen
    if (circleX >= innerWidth - 10) {
        circleX = innerWidth - 7;
        ballSpeed = 0;
    } else if (circleX <= 10) {
        circleX = 5;
        ballSpeed = 0;
    }


    // move player by x speed and y speed
    player.y += player.speed;
    player2.y += player2.speed;

    // if pong ball touches player2, change ball speed
    if (player.x + 7 >= circleX - 2 && player.x - 7 < circleX + 2 && player.y <= circleY + 2 && circleY + 2 < player.y + 60) {
        ballSpeed += 6;
    }

    if (player2.x - 7 <= circleX + 2 && player2.x + 7 > circleX - 2 && player2.y <= circleY + 2 && circleY + 2 < player2.y + 60) {
        ballSpeed -= 6;
    }

    // limit for ballSpeed
    if (ballSpeed > 6) {
        ballSpeed = 6;
    } else if (ballSpeed < -6) {
        ballSpeed = -6;
    }

    // actualy move the ball
    circleX += ballSpeed

    // DRAW
    // draw background to erase history
    ctx.fillStyle = `black`;
    ctx.fillRect(0, 0, innerWidth, innerHeight);

    // draw pong ball
    ctx.fillStyle = `red`;
    ctx.beginPath();
    ctx.arc(circleX, circleY, 5, Math.PI * 2, 0);
    ctx.fill();

    // draw left paddle
    ctx.fillRect(player.x, player.y, 7, 60);
    // draw right paddle
    ctx.fillRect(player2.x, player2.y, 7, 60);

    requestAnimationFrame(pong);
}

// continous movement
function movement(event) {
    if (event.code == `KeyW`) {
        player.speed = -8;
        console.log(event);
    } else if (event.code == `KeyS`) {
        player.speed = 8;
        console.log(event);
    } else if (event.code == `Numpad8`) {
        player2.speed = -8;
    } else if (event.code == `Numpad5`) {
        player2.speed = 8;
    }
}

function stopMovement(event) {
    if (event.repeat == `true`) {
        player.speed = 0;
    }
}

function gameStart(event) {
    if (event.code == `Space`) {
        circleX = 200;
        circleY = 105;
        ballSpeed = 5;
    }
}