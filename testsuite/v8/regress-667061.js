



























var caught = false;
try {
  (('foo'))();
} catch (o) {
  assertTrue(o instanceof TypeError);
  caught = true;
}
assertTrue(caught);



function h(o) {
  return o.x();
}

var caught = false;
try {
  h({ x: 1 });
} catch (o) {
  assertTrue(o instanceof TypeError);
  caught = true;
}
assertTrue(caught);



function g(o) {
  return o.x();
}

function O(x) { this.x = x; };
var o = new O(function() { return 1; });
assertEquals(1, g(o));  
assertEquals(1, g(o));  

var caught = false;
try {
  g(new O(3));
} catch (o) {
  assertTrue(o instanceof TypeError);
  caught = true;
}
assertTrue(caught);



function f(o) {
  return o.x();
}

assertEquals(1, f({ x: function () { return 1; }}));  
assertEquals(2, f({ x: function () { return 2; }}));  
assertEquals(3, f({ x: function () { return 3; }}));  

var caught = false;
try {
  f({ x: 4 });
} catch (o) {
  assertTrue(o instanceof TypeError);
  caught = true;
}
assertTrue(caught);
