class Particle {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }

    
        }
       
    
  function  display() 

       this.color=color(random(0,255), random(0,255), random(0,255));
       World.add(world,this.body);
