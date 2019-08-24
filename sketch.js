function setup(){
  createCanvas(windowWidth, windowHeight);
  let sunColor = color(249,215,28);
  let earthColor = color(89,221,221);
  let moonColor = color(254,252,215);

  sun = new ag(width/2,height/2,200,0,sunColor);
  planet = new ag(width/2, height/2,20,100,earthColor);
  moon = new ag(width/2,height/2,10,50,moonColor);
  
}

function draw(){
  background(0);
  this.sun.show();
  this.planet.applyForce(this.sun,(TWO_PI/86400) * 100);
  this.moon.applyForce(this.planet,(TWO_PI/39340.8) * 100);
}
