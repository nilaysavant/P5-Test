// ball object
export let ball = {
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