const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var engine;
var boxes = []

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,height,800,20);
}
function draw() {
  background(175);
  Engine.update(engine);  
  ground.display();
  for(var i=0;i<boxes.length;i++){
    boxes[i].display();
  }
}
function mousePressed() {
  box1 = new Box(mouseX,mouseY,random(20,70),random(20,70));
  boxes.push(box1);
}