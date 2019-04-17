/*
    P5-Test - A project to test out p5.js

    Author: Nilay Savant
    Description:
*/

// GLOBAL Vars

// ball object
const ball = {
    // Attributes of ball
    x: 50, // x cord
    y: 50, // y cord
    speed: 10, // move speed
    dia: 50, // diamenter
    max_x: 100, // max perimeter
    max_y: 100,
    min_x: 0,
    min_y: 0,
    mass: 1,
    gforce: 0,

    // init function
    init: function (maxX, maxY, gravity) {
        this.gforce = this.mass * gravity
        this.max_y = maxX - this.dia / 2
        this.max_x = maxY - this.dia / 2
        this.min_x = 0 + this.dia / 2
    },

    // display the ball object
    display: function () {
        circle(this.x, this.y, this.dia)
        fill(0)
    },

    // movement functions
    ballUp: function (speed = this.speed) {
        this.y -= speed
    },
    ballDown: function (speed = this.speed) {
        this.y += speed
    },
    ballLeft: function (speed = this.speed) {
        this.x = this.x <= this.min_x ? this.min_x : this.x - speed
    },
    ballRight: function (speed = this.speed) {
        this.x += speed
    },

    // add gravity to ball
    gravity: function () {
        this.y = this.y >= this.max_y ? this.max_y : this.y + this.gforce
    },

    example: function () {
        console.table(this)
    }
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
    ball.example()
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