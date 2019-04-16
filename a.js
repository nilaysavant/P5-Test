/*
    P5-Test - A project to test out p5.js

    Author: Nilay Savant
    Description:
*/

// GLOBAL Vars
let frame = 0,
    task, speed = 4
ballDia = 50

// SETUP -----------------------------------------<<<
function setup() {
    // put setup code here
    init()
    frame = 0
    task = ballDown
}

// DRAW ------------------------------------------<<<
function draw() {
    clear()
    init()
    task()
    task = frame > height - ballDia / 2 ? ballUp : task
    task = frame < 0 + ballDia / 2 ? ballDown : task
}

/*
    A function reset canvas to init state
*/
function init() {
    createCanvas(500, 500)
    background(0)
    stroke(255) // Set line drawing color to white
    frameRate(60)
}

/*
    A fucntion to move the ball down
*/
function ballDown() {
    circle(width / 2, frame, ballDia)
    fill(0)
    frame = frame + speed
}

/*
    A function to move the ball up
*/
function ballUp() {
    circle(width / 2, frame, ballDia)
    fill(0)
    frame = frame - speed
}