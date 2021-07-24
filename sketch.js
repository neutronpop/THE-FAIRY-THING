var starImg,bgImg;
var star, starBody;
var fairy, fairyImg;

var anotherFairy, anotherFairyImg;

var barrier;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairy.png")
	anotherFairyImg = loadImage("images/fairyImage1.png")

	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(700,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	fairy = createSprite(350, 200)
	fairy.addImage(fairyImg)
	fairy.scale = 0.2

	anotherFairy = createSprite(75, 200)
	anotherFairy.addImage(anotherFairyImg)
	anotherFairy.scale = 0.2;
	anotherFairy.velocityX = -5

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if(fairy.x > 560){

    fairy.velocityX = 0;

  }	

  if(star.y > 135){

  Matter.Body.setStatic(starBody, true);

  }

  text("ewwwww!", 50,200)

  console.log(star.y);

  text("<---Mam this will haunt my dreams. Why would you do this to me?",400,200)



  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false);
		fairy.velocityX = 20 
	}

	//writw code to move fairy left and right
	
}
