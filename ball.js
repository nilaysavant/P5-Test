// ball object
// const ball = {
//     // Attributes of ball
//     x: 50, // x cord
//     y: 50, // y cord
//     rel_height: 0, // the max value of height when released 
//     bounce: 0,
//     speed: 10, // move speed
//     dia: 50, // diamenter
//     max_x: 100, // max perimeter
//     max_y: 100,
//     min_x: 0,
//     min_y: 0,
//     mass: 1,
//     gforce: 0,

//     // init function
//     init: function (maxX, maxY, gravity) {
//         this.gforce = this.mass * gravity
//         this.max_y = maxX - this.dia / 2
//         this.max_x = maxY - this.dia / 2
//         this.min_x = 0 + this.dia / 2
//     },

//     // display the ball object
//     display: function () {
//         circle(this.x, this.y, this.dia)
//         fill(0)
//     },

//     // movement functions
//     ballUp: function (speed = this.speed) {
//         this.y -= speed
//         this.rel_height = this.y
//     },
//     ballDown: function (speed = this.speed) {
//         this.y += speed
//     },
//     ballLeft: function (speed = this.speed) {
//         this.x = this.x <= this.min_x ? this.min_x : this.x - speed
//     },
//     ballRight: function (speed = this.speed) {
//         this.x += speed
//     },

//     // add gravity to ball
//     gravity: function () {
//         if (this.y >= this.max_y) {
//             this.y = this.max_y

//             this.bounce = abs(this.max_y - this.rel_height)
//             this.y = this.bounce > this.dia ? this.y - 1 : this.y

//             this.rel_height = this.max_y
//         } else {
//             if (this.bounce > 0) {
//                 this.y -= this.gforce
//                 this.bounce -= 37
//             } else {
//                 this.bounce = 0
//                 this.y += this.gforce
//             }
//             this.rel_height = min(this.rel_height, this.y)
//         }
//         // this.y = this.y >= this.max_y ? this.max_y : this.y + this.gforce
//     },

//     // bounce: function (height = this.rel_height) {
//     //     this.y = this.y >= height ? this.y : this.y - this.speed
//     // },

//     log: function () {
//         console.table(this)
//     }
// }


function drawArrow(base, vec, myColor) {
    push();
    stroke(myColor);
    strokeWeight(3);
    fill(myColor);
    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    let arrowSize = 7;
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
}

class Ball {
    constructor(dia, mass) {
        // Attributes of ball
        this.pos = createVector(50, 50) // pos vector

        let rel_height = 0 // the max value of height when released 
        this.bounce = 0
        this.speed = 10 // move speed
        this.dia = 50 // diamenter
        this.maxpos = createVector(100, 100)
        this.minpos = createVector(0, 0)
        this.mass = mass
    }
    log() {
        console.table(this)
    }
    show() {
        circle(this.pos.x, this.pos.y, this.dia)
        fill(0)
    }
    gravity() {
        let grav = createVector(this.pos.x, height)
        this.gforce = p5.Vector.sub(grav, this.pos)
        drawArrow(this.pos, this.gforce, 'blue')
    }
    // movement functions
    ballUp(speed = this.speed) {
        this.pos.y -= speed
        this.rel_height = this.pos.y
    }
    ballDown(speed = this.speed) {
        this.pos.y += speed
    }
    ballLeft(speed = this.speed) {
        this.pos.x = this.pos.x <= this.minpos.x ? this.minpos.x : this.pos.x - speed
    }
    ballRight(speed = this.speed) {
        this.pos.x += speed
    }
}