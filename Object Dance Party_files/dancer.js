// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.setPosition(this.top, this.left);
  this.step();

};

  makeDancer.prototype.step = function(){

    setTimeout(this.step.bind(this),this.timeBetweenSteps)

  }
  makeDancer.prototype.setPosition = function(top, left){
    
    this.styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(this.styleSettings);
    setTimeout(this.setPosition.bind(this), this.timeBetweenSteps);
  }
  makeDancer.prototype.setColor = function(color){
    this.$node.css({color: color})
  }
  // makeDancer.prototype.lineUp = function(){
  //   console.log('its working')
  //   this.$node.css({left:100});
  //   this.oldStep = 'linedUp'
  // }
  makeDancer.prototype.lineUp = function() {
    console.log("Inside the Dancer Class"); 
    this.top = 200;
  };