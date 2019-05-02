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

        this.rel_height = 200 // the max value of height when released 
        this.bounce = 0
        this.speed = 15 // move speed
        this.dia = 25 // diamenter
        this.maxpos = createVector(100, 100)
        this.minpos = createVector(this.dia / 2, height - this.dia / 2 - 5)
        this.mass = mass
        this.jumping = false
        this.velocity = createVector(0, 0)
    }
    log() {
        console.table(this)
    }
    show() {
        circle(this.pos.x, this.pos.y, this.dia)
        fill(0)


        this.velocity.setMag(this.velocity.mag() - 1)

        this.velocity.limit(20)

        this.pos.x += this.velocity.x
        this.pos.y += this.velocity.y

        if (this.pos.x <= this.minpos.x) {
            this.pos.x = this.minpos.x
        }
        if (this.pos.y >= this.minpos.y) {
            this.pos.y = this.minpos.y
            let bounce = this.velocity.copy()
            bounce.mult(-2)
            bounce.x = 0
            this.velocity = p5.Vector.add(this.velocity, bounce)
        }
        drawArrow(this.pos, this.velocity, 'red')
    }
    gravity() {
        let grav = createVector(this.pos.x, height)
        this.gforce = p5.Vector.sub(grav, this.pos)
        drawArrow(this.pos, this.gforce, 'blue')

        let tempVec = this.gforce.copy()
        tempVec.setMag(1.5)
        this.velocity = p5.Vector.add(this.velocity, tempVec)
        
    }
    // movement functions
    ballUp() {
        this.velocity.y -= this.speed * 0.8
        this.rel_height = height - this.pos.y
        let grav = createVector(this.pos.x, height + this.dia / 2)
        drawArrow(grav, this.gforce.mult(-1), 'yellow')
    }
    ballDown() {
        this.velocity.y += this.speed
    }
    ballLeft() {
        this.velocity.x -= this.speed
    }
    ballRight() {
        this.velocity.x += this.speed
    }
}