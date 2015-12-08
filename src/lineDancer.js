var lineDancer = function(top, left, timeBetweenSteps, color){
  this.$node = $('<span class="discoDancer"></span>')
  makeDancer.apply(this, arguments);
  this.color = color;
};
  lineDancer.prototype = Object.create(makeDancer.prototype);
  lineDancer.prototype.constructor = lineDancer;
  lineDancer.prototype.step = function(){
    // this.top+=10;
    makeDancer.prototype.step.call(this);
        // this.top-=10;

    this.$node.css({color: this.color});
    console.log(this.$node)
    this.$node.css({top: this.top+=10, left: this.left})
    this.$node.toggle()
  };
  // lineDancer.prototype.setColor = function(){
  // }
  
  lineDancer.prototype.setPosition = function() {
    console.log("Inside the lineDancer: ", this.top);
    makeDancer.prototype.setPosition.call(this,this.top,this.left)
            // this.top+=10
  }