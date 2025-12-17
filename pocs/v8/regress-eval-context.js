(function() {
  'use strict';
  var x = 0;

  {
    let x = 1;
    print(1, eval("x"));
  }

  {
    let y = 2;
    print(0, eval("x"));
  }

  print(0, eval("x"));
})();
