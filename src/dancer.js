// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, color){

  // var dancer = {};
  
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  // dancer.$node = ;

 
  // dancer.step = function(){
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };
  this.setPosition(this.top, this.left);
  this.step();
  this.setColor(color)
  // dancer.setPosition = function(top, left){
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
    
  // };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  // return dancer;
};
  // makeDancer.prototype.constructor = makeDancer;

  makeDancer.prototype.step = function(){
    // this.$node.toggle();
    setTimeout(this.step.bind(this),this.timeBetweenSteps)
          console.log(this)

  }
  makeDancer.prototype.setPosition = function(top, left){
  // this.top+=10;
  debugger
    this.styleSettings = {
      top: top,
      left: left
    };
    console.log("Inside the makeDancer: ", this.top);
    this.$node.css(this.styleSettings);
    setTimeout(this.setPosition.bind(this), this.timeBetweenSteps);
    this.top-=10;

    // top+=3;
  }
  makeDancer.prototype.setColor = function(color){
    this.$node.css({color: color})
  }
