var circle = {
  x: 0,
  y: 0,
  xspeed: -4,
  yspeed: -4
};

function setup() { 
  createCanvas(800, 600);
  background(0);
} 

function draw() { 
  noFill();
  stroke(random(255));
  ellipse(width-circle.x,height-circle.y,20,20);
  stroke(random(255),0,0);
  ellipse(circle.x,circle.y,20,20);
  if(circle.x> width || circle.x<0) circle.xspeed *= -1;
  if(circle.y>height || circle.y<0) circle.yspeed *= -1;
  circle.x += circle.xspeed;
  circle.y += circle.yspeed;
}