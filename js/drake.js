var DRAKE = (function(my) {
  'use strict';
  var previous;

  function switchBg() {
    var biv = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

    function uniqIndex() {
      var current = Math.floor(Math.random()*7);
      if(current !== previous){
        previous = current;
        return current;
      } else {
        return uniqIndex();
      }
    }

    $('body').css('background-color', biv[uniqIndex()]);
  }

  //public
  my.switchBg = function(time) {
    window.setInterval(switchBg, time);
  };

  return my;
}({}));

define({
  switchBg: DRAKE.switchBg
});
