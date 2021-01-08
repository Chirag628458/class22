const World= Matter.World;
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;

var engine, world, ground;
var ball

function setup() {
  var canvas= createCanvas(400,400);
 
  engine= Engine.create();
  world= engine.world;

  var options_ground={
    isStatic: true
  }

  var option_ball={
    restitution: 0.8
  }

  ground= Bodies.rectangle(200,390,400,20, options_ground);
  ball=Bodies.circle(200, 40, 20, option_ball);


  World.add(world, ground )
  World.add(world, ball )

  


}

function draw() {
  background("black");  
 
 Engine.update(engine); 
rectMode(CENTER);
rect(ground.position.x, ground.position.y, 400,20);

ellipseMode(RADIUS)
ellipse(ball.position.x, ball.position.y, 20, 20)

}