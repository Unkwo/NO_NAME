
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ball_options;
ball_options={
    isStatic:false,
    restitution:0.3,
	friction:0,
	density:1.2
	}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Bodies.circle(200,200,10,ball_options);
	World.add(world,ball);
	
	
	rectMode(CENTER);
  ellipseMode(RADIUS);

	Engine.run(engine);
  
	
}


function draw() {
  
  background("gray");
  
  
  ellipse(ball.position.x,ball.position.y,10);
  drawSprites();
 
}



