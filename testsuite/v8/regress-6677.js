




const x = 0;
assertThrows(() => { with ({}) { x = 1; } }, TypeError);
assertEquals(0, x);

assertThrows(() => { with ({}) { eval("x = 1"); } }, TypeError);
assertEquals(0, x);



assertEquals('function', function f() {
  with ({}) { f = 1 }
  return typeof f;
}());



assertEquals('function', function f() {
  with ({}) {
    assertThrows(function() { "use strict"; f = 1 }, TypeError);
  }
  return typeof f;
}());
