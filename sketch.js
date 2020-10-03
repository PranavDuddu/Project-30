const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ground1 = new Ground(200,200,20,20);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  ground1.display();
}