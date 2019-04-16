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
    max_x: 100, // max perimeter
    max_y: 100,
    mass: 1,
    gforce: 0,

    // init function
    init: (max_x, max_y, gravity) => {
        ball.gforce = ball.mass * gravity
        ball.max_y = max_y - ball.dia / 2 - ball.gforce
        ball.max_x = max_x - ball.dia / 2 - ball.gforce
    },

    // display the ball object
    display: () => {
        circle(ball.x, ball.y, ball.dia)
        fill(0)
    },

    // movement functions
    ballUp: (speed = ball.speed) => {
        ball.y -= speed
    },
    ballDown: (speed = ball.speed) => {
        ball.y += speed
    },
    ballLeft: (speed = ball.speed) => {
        ball.x -= speed
    },
    ballRight: (speed = ball.speed) => {
        ball.x += speed
    },

    // add gravity to ball
    gravity: () => {
        ball.y = ball.y > ball.max_y ? ball.y : ball.y + ball.gforce
    },
}

// SETUP -----------------------------------------<<<
function setup() {
    // put setup code here
    initCanvas()
    ball.init(width, height, 15)
}

// DRAW ------------------------------------------<<<
function draw() {
    clear()
    initCanvas()
    ball.display()
    ball.gravity()
    keyboardInput()
}

/*
    A function reset canvas to init state
*/
function initCanvas() {
    createCanvas(500, 500)
    background(0)
    stroke(255) // Set line drawing color to white
    frameRate(60) // 60 fps
}

// KeyPress function
function keyboardInput() {
    console.log('keyboard input', keyCode)
    if (keyIsDown(87)) { // W prees: UP
        ball.ballUp(40)
    } else if (keyIsDown(83)) { // S press: DOWN
        ball.ballDown()
    } else if (keyIsDown(65)) { // A press: LEFT
        ball.ballLeft()
    } else if (keyIsDown(68)) { // D press: RIGHT
        ball.ballRight()
    }
    return false; // prevent default
}