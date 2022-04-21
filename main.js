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
let verticalBallSpeed = 0;
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
let num = 0;

// add event listeners
document.addEventListener(`keydown`, keydownHandler);


// MAIN FUNCTION: drawing pong ball and paddles
requestAnimationFrame(pong);
function pong() {
    // LOGIC
    // if player1 moving off screen, keep him on screen
    if (player.y < 5) {
        player.y = 5;

    } else if (player.y > innerHeight - 100) {
        player.y = innerHeight - 100;
    }

    // if player2 moving off screen, keep him on screen
    if (player2.y < 5) {
        player2.y = 5;
    } else if (player2.y > innerHeight - 100) {
        player2.y = innerHeight - 100;
    }

    // if ball moves off screen, move back on screen (horizontal)
    if (circleX >= innerWidth - 10) {
        circleX = innerWidth - 7;
        ballSpeed = 0;
    } else if (circleX <= 10) {
        circleX = 5;
        ballSpeed = 0;
    }

    // if ball hits vertical screen limits, reverse verticalBallSpeed
    if (circleY >= innerHeight - 11) {
        
    } else if (circleY < 11) {
        circleY = 11;
    } 

    // move player by x speed and y speed
    player.y += player.speed;
    player2.y += player2.speed;

    // if pong ball touches player, change ball speed
    if (player.x + 7 >= circleX - 2 && player.x - 7 < circleX + 2 && player.y <= circleY + 2 && circleY + 2 < player.y + 100) {
        verticalBallSpeed = 0;
        ballSpeed += 6;
        // get random number between -10 and 10
        num = Math.floor(Math.random() * 10) + 1; // get number between 1 and 10
        num *= Math.round(Math.random()) ? 1 : -1; // add minus sign 50% of times
        console.log(num);
        // replace verticalBallSpeed with random number
        verticalBallSpeed += num;
    }

    // if pong ball touches player2, change ball speed
    if (player2.x - 7 <= circleX + 2 && player2.x + 7 > circleX - 2 && player2.y <= circleY + 2 && circleY + 2 < player2.y + 100) {
        verticalBallSpeed = 0;
        ballSpeed -= 6;
        // get random number between -10 and 10
        num = Math.floor(Math.random() * 10) + 1; // get number between 1 and 10
        num *= Math.round(Math.random()) ? 1 : -1; // add minus sign 50% of times
        console.log(num);
        // replace verticalBallSpeed with random number
        verticalBallSpeed += num;
    }

    circleY += verticalBallSpeed;

    // limit for ballSpeed
    if (ballSpeed > 4) {
        ballSpeed = 4;
    } else if (ballSpeed < -4) {
        ballSpeed = -4;
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
    ctx.fillRect(player.x, player.y, 7, 100);
    // draw right paddle
    ctx.fillRect(player2.x, player2.y, 7, 100);

    requestAnimationFrame(pong);
}

// continous movement
function keydownHandler(event) {
    console.log(event.code);
    if (event.code == `Space`) { // place ball and give ball speed when space pressed
        circleX = 200;
        circleY = 105;
        ballSpeed = -4;
    } else if (event.code == `KeyD`) { // stop player movement when E is pressed
        player.speed = 0;
    } else if (event.code == `Numpad4`) { // stop player2 movement when numpad4 is pressed
        player2.speed = 0;
    } else {
        if (event.code == `KeyW`) { // player movement up or down
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
}

