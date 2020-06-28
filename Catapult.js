class Catapult{
    constructor(){

        //var null = 0;
        // var options = {
        //      isStatic:true
        //  }
        //  this.body = Bodies.rectangle(x,y,width,height,options);
        //  this.width = width;
        //  this.height = height;
        //  World.add(world,this.body);
    
     this.catapult1 = loadImage("sling1.png");
     this.catapult2 = loadImage("sling2.png");
     this.catapult3 = loadImage("sling3.png");
        
    }
     
    
    display(){
        // var pos = this.body.position;
        //   rectMode(CENTER);
        //   fill("red");
        //   rect(pos.x,pos,y,this.width,this.height);

        image(this.catapult1,100,370);
        image(this.catapult2,70,370);

    }
};