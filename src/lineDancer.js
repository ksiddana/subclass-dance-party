var lineDancer = function(top, left, timeBetweenSteps){

  makeDancer.apply(this, arguments);
  this.oldStep = "Up";
  this.$node.css( {
    "color" : "yellow"
  });
};
  lineDancer.prototype = Object.create(makeDancer.prototype);
  lineDancer.prototype.constructor = lineDancer;
  lineDancer.prototype.step = function(){
    // this.top+=10;
    makeDancer.prototype.step.call(this);
        // this.top-=10;
        // console.log(this.oldStep)
    if (this.oldStep === "Up") {
      this.$node.css("top", "+=10");  
      this.oldStep = "Down";
    } else {
      this.$node.css("top", "-=10");
      this.oldStep = "Up";
    } 
  };

  
  lineDancer.prototype.setPosition = function() {
    // console.log("Inside the lineDancer: ", this.top);
    makeDancer.prototype.setPosition.call(this, this.top, this.left);
  }
  
  // lineDancer.prototype.lineUp = function(){
  //   console.log('its working')
  //   this.$node.css("left","100px");
  //   this.oldStep = 'linedUp';
  //   // console.log(this)
  // }