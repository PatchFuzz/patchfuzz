(function testSloppy() {
  var arrow = (sth = (function f() {
    {
      function f2() { }
    }
  })()) => 0;

  print(0, arrow());
})();

(function testStrict() {
  "use strict";
  var arrow = (sth = (function f() {
    {
      function f2() { }
    }
  })()) => 0;

  print(0, arrow());
})();
