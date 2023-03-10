const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var cannon;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  

}


function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  angle= -PI/4;

tower = new Tower (150,350,160,310)
cannon = new Cannon (180,110,140,70,angle);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);
  tower.display();
  cannon.display();
  Engine.update(engine);

 //console.log(mouseY);
 //console.log(mouseX);
}

