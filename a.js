let frame = 0,
    task, speed = 4
ballDia = 50

function setup() {
    // put setup code here
    init()
    frame = 0
    task = ballDown
}

function draw() {
    clear()
    init()
    task()
    task = frame > height - ballDia / 2 ? ballUp : task
    task = frame < 0 + ballDia / 2 ? ballDown : task
}

function init() {
    createCanvas(500, 500)
    background(0)
    stroke(255) // Set line drawing color to white
    frameRate(60)
}

function ballDown() {
    circle(width / 2, frame, ballDia)
    fill(0)
    frame = frame + speed
}

function ballUp() {
    circle(width / 2, frame, ballDia)
    fill(0)
    frame = frame - speed
}