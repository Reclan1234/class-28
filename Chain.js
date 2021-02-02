class Chain{
    constructor(bodyA, pointB){
        //var options1= bodyA: bird.body
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        // pointc is the alternate name of pointb, can't use pointb as it is a property inside constructor
        this.pointC=pointB;
    }
    fly(){
        //if a body is made null, chain will release that body
        this.chain.bodyA=null;
    }

    display(){
        if(this.chain.bodyA){
        var ptA = this.chain.bodyA.position;
       //var pointB = this.chain.bodyB.position;
        var ptB=this.pointC;
        strokeWeight(4);
        line(ptA.x, ptA.y, ptB.x, ptB.y);
       }
    }
    
}