
































var x = 'global';

function f() {
  var x = 'function';
  assertEquals(undefined, g);
  try {
    assertEquals(undefined, g);
    throw 'catch';
  } catch (x) {
    function g() { return x; }
    assertEquals('catch', g());
  }
  assertEquals('catch', g());
  return g;
}

assertEquals('catch', f()());
