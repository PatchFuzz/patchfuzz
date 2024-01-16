





var v = {p:0};

v.__defineGetter__("p", function() { return 13; });

function f() {
  var boom = (v.foo = v);
  assertEquals(v, boom.foo);
}

f();
f();
f();
