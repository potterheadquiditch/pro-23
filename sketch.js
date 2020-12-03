var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var basket1, bask1,basket2, bask2,basket3, bask3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	bask1=createSprite(400,640,100,20)
	bask1.shapeColor="red"
	bask3=createSprite(350,600,20,100)
	bask3.shapeColor="red"
	bask2=createSprite(450,600,20,100)
	bask2.shapeColor="red"

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 basket1 = Bodies.rectangle(400, 640, 100, 20 , {isStatic:true} );
 	World.add(world, basket1);
	 basket2 = Bodies.rectangle(450, 600, 20, 100 , {isStatic:true} );
	 World.add(world, basket2);
	 basket3 = Bodies.rectangle(350, 600, 20, 100 , {isStatic:true} );
 	World.add(world, basket3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  bask1.x= basket1.position.x
  bask3.x= basket3.position.x
  bask2.x= basket2.position.x
  bask1.y= basket1.position.y
  bask3.y= basket3.position.y
  bask2.y= basket2.position.y

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 Matter.Body.setStatic(packageBody,false);

    
  }
}



