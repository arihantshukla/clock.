var timehour=hour()
 var timemin=minute()
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  fill("black")
  text("Current hour: \n ",50,50)
  drawSprites();
}