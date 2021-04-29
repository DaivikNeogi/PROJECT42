var hr = hour();
var min = minute();
var sec = second();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);


}

function draw() {
  background(255,255,255);  
  angleMode(DEGREES);
  scAngle = map(sc, 0, 60, 0, 360);
  //seconds
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0)
  pop();

  drawSprites();
}

