/*
    P5-Test - A project to test out p5.js

    Author: Nilay Savant
    Description:
*/

// GLOBAL Vars

// ball object
const ball = {
    // Attributes of ball
    x: 0, // x cord
    y: 0, // y cord
    speed: 10, // move speed
    dia: 50, // diamenter

    // display the ball object
    display: () => {
        circle(ball.x, ball.y, ball.dia)
        fill(0)
    },

    // movement functions
    ballUp: () => {
        ball.y -= ball.speed
    },
    ballDown: () => {
        ball.y += ball.speed
    },
    ballLeft: () => {
        ball.x -= ball.speed
    },
    ballRight: () => {
        ball.x += ball.speed
    },
}

// SETUP -----------------------------------------<<<
function setup() {
    // put setup code here
    initCanvas()
    ball.x = 0
    ball.y = 0
}

// DRAW ------------------------------------------<<<
function draw() {
    clear()
    initCanvas()
    ball.display()
    keyboardInput()
}

/*
    A function reset canvas to init state
*/
function initCanvas() {
    createCanvas(500, 500)
    background(0)
    stroke(255) // Set line drawing color to white
    frameRate(60)
}


/**
 *  add gravity to ball
 */
function addGravity() {

}

// KeyPress function
function keyboardInput() {
    console.log('keyboard input', keyCode)
    if (keyIsDown(87)) { // W prees: UP
        ball.ballUp()
    } else if (keyIsDown(83)) { // S press: DOWN
        ball.ballDown()
    } else if (keyIsDown(65)) { // A press: LEFT
        ball.ballLeft()
    } else if (keyIsDown(68)) { // D press: RIGHT
        ball.ballRight()
    }
    return false; // prevent default
}