class rubber {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':5,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,40,40 ,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("blue");
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  