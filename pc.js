class pc{
  constructor(x,y){

    this.body=Bodies.circle(x,y,30);
    this.image=loadImage("player.png");
    World.add(world,this.body);
  }   
  
  display(){
    ellipseMode(RADIUS);
   fill(255,255,255);

    image(this.image,this.body.position.x,this.body.position.y,30,30);

  // this.image=loadImage("player.png");
  }
}