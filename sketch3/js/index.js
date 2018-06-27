class Walker{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.radius = 6;
  }
   move(){
    this.x+= random(-2,2);
    this.y+= random(-2,2);
  }
    display(){
     stroke(255);noFill();
     ellipse(this.x,this.y,this.radius,this.radius-1);
      fill (255,255,0); 
     ellipse(this.x+5,this.y,this.radius+4,this.radius);
  }
}

var walkers =[];

function setup(){
  createCanvas(600,600);
  for(let i=0;i<35;i++){
    walkers.push(new Walker());
  }
}

function draw(){
  noFill();
    background(0);


  for(let i=0;i<walkers.length;i++){
    walkers[i].display();
    walkers[i].move();
  }
}