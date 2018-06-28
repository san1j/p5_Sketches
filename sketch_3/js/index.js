
function setup(){
  createCanvas(windowWidth,windowHeight);
  frameRate(6);
  c1 = color(0, 0, 153);
  c2 = color(0);
  c3 = color(0, 0, 153);
  c4 = color(0, 102, 153);
}

function draw(){
  
  for (var i = 0; i <= height; i++) {
      var inter = map(i, 0, height, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(0, i, width, i);
    }
    for (var k = 90; k <= 470; k++) {
      var interp = map(k, 90, 470, 0, 1);
      var d = lerpColor(c3, c4, interp);
      stroke(d);
      line(0, k, width, k);
    }  
    for(let j = 0; j<random(0,15);j++){
      let x = random(width); 
      let y = random(height);
      fill(221,234,14,random(0,235));
      let radius = random(0,20);
      noStroke();
      ellipse(x,y,radius,radius);
  }
  
 }