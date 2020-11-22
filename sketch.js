var fixedRect, movingRect;
var go1,go2,go3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  go1 = createSprite(200,100,40,20);
  go1.shapeColor = "green";
  go1.debug = true;
  go2 = createSprite(100,50,50,30);
  go2.shapeColor = "green";
  go2.debug = true;
  go3 = createSprite(50,200,60,45);
  go3.shapeColor = "green";
  go3.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching (movingRect,go1)) {
    movingRect.shapeColor = "red";
    go1.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
    go1.shapeColor = "green";
  }
  drawSprites();
}
