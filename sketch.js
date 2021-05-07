
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var thor,soil;
var b1,b2,b3,b5,b4,b6,b7;
var b8,b9,b10,b11,b12,b13,b14,b15;
var b16,b17,b18,b19,b20,b21,b22,b23,b24,b25;
var flyover;




function preload() {
//preload the images here
imagek=loadImage("images/GamingBackground.png")
monsterImg=loadImage("images/Monster-01.png")
}

function setup() {
  createCanvas(1200,600); 

  engine = Engine.create();
  world = engine.world;

  thor=new Hero(150,300,50)
  soil=new Ground(300,500,800,10)
  soil2=new Ground(800,300,100,10)
  b1=new Block(450,475,40,40)
  b2=new Block(450,435,40,40)
  b3=new Block(450,395,40,40)
  b4=new Block(450,355,40,40)
  b5=new Block(450,315,40,40)
  b6=new Block(450,275,40,40)
  b7=new Block(450,235,40,40)

  b8=new Block(520,475,40,40)
  b9=new Block(520,435,40,40)
  b10=new Block(520,395,40,40)
  b11=new Block(520,355,40,40)
  b12=new Block(520,315,40,40)
  b13=new Block(520,275,40,40)
  b14=new Block(520,235,40,40)
  b15=new Block(520,195,40,40);
   
  b16=new Block(590,475,40,40)
  b17=new Block(590,435,40,40)
  b18=new Block(590,395,40,40)
  b19=new Block(590,355,40,40)
  b20=new Block(590,315,40,40)
  b21=new Block(590,275,40,40)
  b22=new Block(590,235,40,40)
  b23=new Block(590,195,40,40)
  b24=new Block(590,155,40,40)
  b25=new Block(590,115,40,40)
  monster=new Hero(800,200,60);
  Matter.Body.setStatic(monster.body,false);
  monster.image=monsterImg;

  flyover=new Fly(thor.body,{x:200,y:200});

}

function draw() {
  
  soil2.display();
  background(imagek);
  Engine.update(engine);
  
  monster.display();
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();

b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
b21.display();
b22.display();
b23.display();
b24.display();
b25.display();


thor.display();
flyover.display();
soil.display();

}
function mouseDragged(){
 Matter.Body.setPosition(thor.body, {x: mouseX , y: mouseY});
}

