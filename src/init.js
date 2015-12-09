$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    event.preventDefault();
    /* This function sets up the click handlers for the create-dancer

     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
     /*var inputColor = prompt("Which color would you like? \n Red, blue, green, black, white, grey, orange or yellow?");*/

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer)
    $('body').append(dancer.$node);
    $('.functionLineUp').on('click',function(e){
    // e.stopPropagation()
    // var functionName = $(this).data("dancer-maker-function-name");
    // var lineUpMakerFunction = window[functionName];
    // console.log(lineUpMakerFunction)
        console.log(window.dancers)
    // console.log(window.dancers[0].lineUp)
  for (var i = 0; i < window.dancers.length; i++) {
      // if(window.dancers[i]=== makeBlinkyDancer){
      console.log('working')
        window.dancers[i].lineUp();  
    }
  })
  });
 
  

  $(".linedancer").on("click", function(event){
    event.preventDefault();
    var functionName = $(this).data("dancer-maker-function-name");
    var makerFunction = window[functionName];
    // console.log(makerFunction)
    function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
    console.log(window.dancers)
    var lineDancer = new makerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      400, getRandomColor()
      );
    window.dancers.push(lineDancer)
    $('body').append(lineDancer.$node);
  });

  $('.dancer').mouseover(function(){
    console.log('hai')
    $(this).css({"border" : "50px"});
  });

  $('.dancer').mouseout(function(){
    $(this).css({"border" : "20px"});
  })

});

