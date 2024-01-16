



























(function(){
  "use strict";
  var list = Object.freeze([1, 2, 3]);
  assertThrows(function() { list.unshift(4); }, TypeError);
  assertThrows(function() { list.shift(); }, TypeError);
})();
