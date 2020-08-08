class Box{
    constructor(x, y, width, height){
        var options={
            restitution: 0.5,
            friction: 0.5,
            density: 0.8,
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x, y, this.width, this.height, options);

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke(0);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
    }
}