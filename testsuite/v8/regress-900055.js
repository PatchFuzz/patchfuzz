


























var alias = eval;
function e(s) { return alias(s); }

assertEquals(42, e("42"));
assertEquals(Object, e("Object"));
assertEquals(e, e("e"));

var caught = false;
try {
  e('s');  
} catch (e) {
  caught = true;
  assertTrue(e instanceof ReferenceError);
}
assertTrue(caught);
