class Hero {
  constructor(x, y,radius) {
  this.radius=radius;

    var options={
      isStatic:false,
      restitution:1,
      friction:0.5,
      density:2
      
    }
  this.image=loadImage("images/Superhero.png") 
   this.body=Bodies.circle(x,y,radius,options);
    World.add(world, this.body);
  }
  display(){
    push();
    var pos =this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.radius*2,this.radius*2);
    pop();
  }
};
    