(function(){
  "use strict";
  var list = Object.freeze([1, 2, 3]);
  print(function() { list.unshift(4); }, TypeError);
  print(function() { list.shift(); }, TypeError);
})();
