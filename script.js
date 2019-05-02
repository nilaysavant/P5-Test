/*
    P5-Test - A project to test out p5.js

    Author: Nilay Savant
    Description:
*/

// GLOBAL Vars

let ball;



// SETUP -----------------------------------------<<<
function setup() {
    // put setup code here
    initCanvas()
    ball =  new Ball(40, 15)
}


// DRAW ------------------------------------------<<<
function draw() {
    clear()
    initCanvas()
    // ball.display()
    ball.gravity()
    keyboardInput()
    ball.show()
    // ball.log()

}

/*
    A function reset canvas to init state
*/
function initCanvas() {
    createCanvas(1350, 610)
    background(0)
    stroke(255) // Set line drawing color to white
    frameRate(60) // 60 fps
}

// KeyPress function
function keyboardInput() {
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