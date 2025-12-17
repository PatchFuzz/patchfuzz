(function () {
  class F extends Function {}
  let f = new F("'use strict';");
  
  for (let i = 0; i < 20; i++) {
    new F();
  }
  gc();
})();
