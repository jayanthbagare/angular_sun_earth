class ag{
  constructor(x,y,radius,distance_from_center,color){
    this.position = createVector(x,y);
    this.velocity = 0;
    this.acceleration = 0.01;
    this.radius = radius;
    this.angle = 0;
    this.distance_from_center = distance_from_center;
    
    this.color = color;
  }

  applyForce(parentBody,acceleration,){
    translate(parentBody.position.x,parentBody.position.y) ;

    this.velocity = acceleration;
    this.angle = this.angle + this.velocity
    this.position.x = (parentBody.radius + this.distance_from_center) * cos(-this.angle);
    this.position.y = (parentBody.radius + this.distance_from_center) * sin(-this.angle);
    this.show();
  }

  show(){
    fill(this.color);
    ellipse(this.position.x,this.position.y,this.radius,this.radius);
  }


}