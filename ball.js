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



class Ball {
    constructor(dia, mass) {
        this.dia = dia
        this.mass = mass
        this.pos = createVector(width/2, height/2)
    }
    log() {
        console.table(this)
    }
    show() {
        circle(this.pos.x, this.pos.y, this.dia)
        fill(0)
    }
}