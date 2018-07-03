class Particle{
  
  constructor(){
    this.x = this.xT = width/2-10;
    this.y = this.yT = height*0.65;
    this.vx = random(-4,5);
    this.vy = random(-4,-3);
    this.vxT = random(-3,6);
    this.vyT = random(-3,-4);
    this.color = [random(255),random(255),random(255),355];
  }
  
   moveCircles(){
      this.color[3] -= 2;
      fill(this.color)
      ellipse(this.x,this.y,15,15);
      this.x += this.vx;
      this.y += this.vy;
  }
  
    moveTriangles(){
      triangle(this.xT+10, this.yT, this.xT+20, this.yT+10,       this.xT+30, this.yT);
      this.xT += this.vxT;
      this.yT += this.vyT;
    }
    
}

function partyPopper(){
  fill(255,223,0);
  triangle(width/3,height*0.55,width*0.65,height*0.55,width/2,height);
}


let particles = new Array(50);

function setup(){
  createCanvas(windowWidth,windowHeight);
  noStroke();
  particles = particles.fill().map(x=> new Particle());
}

function draw(){
  background(0);
  particles.push(new Particle())
  for(let particle of particles){
    particle.moveCircles();
    particle.moveTriangles();
  }
  particles = particles.filter(curr => curr["color"][3]>0)
  partyPopper();

}