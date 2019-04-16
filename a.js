/*
    P5-Test - A project to test out p5.js

    Author: Nilay Savant
    Description:
*/

// GLOBAL Vars

// ball object
const ball = {
    x: 0,
    y: 0,
    speed: 10,
    dia: 50,
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
    displayBall()
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
 * Display a ball 
 */
function displayBall() {
    console.log('display ball')
    circle(ball.x, ball.y, ball.dia)
    fill(0)
}

/*
    A fucntions to move the ball
*/
function ballDown() {
    console.log('ball down')
    ball.y += ball.speed
}

function ballUp() {
    console.log('ball up')
    ball.y -= ball.speed
}

function ballLeft() {
    console.log('ball left')
    ball.x -= ball.speed
}

function ballRight() {
    console.log('ball right')
    ball.x += ball.speed
}

// KeyPress function
function keyboardInput() {
    console.log('keyboard input', keyCode)
    if (keyIsDown(87)) { // W prees: UP
        ballUp()
    } else if (keyIsDown(83)) { // S press: DOWN
        ballDown()
    } else if (keyIsDown(65)) { // A press: LEFT
        ballLeft()
    } else if (keyIsDown(68)) { // D press: RIGHT
        ballRight()
    }
    return false; // prevent default
}