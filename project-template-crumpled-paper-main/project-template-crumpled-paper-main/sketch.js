const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,ball
var engine,world;
var ground1;

var ground2;

var ground3;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	

	var ball_opt =
	{
	   restitution : 0.90,
	   density:0.5
	}

	var ground_opt =
	{
            isStatic : true
	}
	ground1 = Bodies.rectangle(800,700,1600,20,ground_opt)
	World.add(world,ground1);
	fill("black")
	
	ground2 = new ground(1550,700)

	ground3 = new ground(50,700)

	ball = createImg('paper.png')
	ball.position(100,600)
	ball.size(100,100)

	
	

	dustbin = createImg('dustbin.png')
	dustbin.position(1200,500)
	dustbin.size(150,200)
  
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
	background(200);
	rect(ground1.position.x,ground1.position.y,1600,20)
	ellipse(ball.position.x,ball.position.y,50)
	ground2.show()
	ground3.show()
	Engine.update(engine)
}

