
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground
var wall1, wall2, wall3, wall4, wall5, wall6, wall7;
var button;
var button2;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 40, 40);

  ground = new Ground (200,320,200,20);
  wall1 = new Ground(350, 10, 100, 20);
  wall2 = new Ground(393, 60, 20, 100);
  wall3 = new Ground(350, 100, 100, 20);
  wall4 = new Ground(200, 398, 400, 3);
  wall5 = new Ground(3, 200, 3, 400);
  wall6 = new Ground(398, 200, 3, 400);


  button = createButton("Click to Blow UP");
  button.position(150, 350);
  button.class("blowButton");
  button.mouseClicked(blow);

  button = createButton("Click to Blow RIGHT");
  button.position(30, 40);
  button.class("blowButton");
  button.mouseClicked(blow2);

}


function draw() 
{
  background(51);
  Engine.update(engine);

  ball.show();
  ground.show();
  wall1.show();
  wall2.show();
  wall3.show();
  wall4.show();
  wall5.show();
  wall6.show();

  


 
  
}

function blow()
 {
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.035});
 }



function blow2()
 {
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.05, y:0});
 }



 