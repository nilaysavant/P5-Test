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
    speed: 4,
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
    circle(width / 2, ball.y, ball.dia)
    fill(0)
}

/*
    A fucntion to move the ball down
*/
function ballDown() {
    console.log('ball down')
    ball.y += ball.speed
}

/*
    A function to move the ball up
*/
function ballUp() {
    console.log('ball up')
    ball.y -= ball.speed
}

// KeyPress function
function keyboardInput() {
    console.log('keyboard input')
    if (keyIsDown(87)) {
        ballUp()
    } else if (keyIsDown(83)) {
        ballDown()
    }
    return false; // prevent default
}