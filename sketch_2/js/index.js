class Bubble{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.radius = 1;
    this.angle = 0;
    this.speed = 0.04;
  }
   move(radius){
    this.x+= radius*cos(this.angle);
    this.y+= radius*sin(this.angle);
    this.angle = this.angle + this.speed;
  }
    display(){
     ellipse(this.x,this.y,10,10);
  }
}

var bubbles =[];

function setup(){
  createCanvas(600,600);
  background(0);
  for(let i=0;i<35;i++){
    bubbles.push(new Bubble( 300,10));
  }
}

function draw(){
   noFill();
  stroke(255);
  for(let i=0;i<bubbles.length;i++){
    bubbles[i].display();
    bubbles[i].move(i*.33);
  }
}
