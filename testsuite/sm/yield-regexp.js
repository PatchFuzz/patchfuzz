

load(libdir + "asserts.js");


eval(`function f1() { yield /abc/g; }`);


var ex;
try {
  f1();
} catch(e) {
  ex = e;
}
assertEq(ex instanceof ReferenceError, true);


function* f2() {
  yield /abc/g;
}

g = f2();
v = g.next();
assertEq(v.done, false);
assertEq(v.value instanceof RegExp, true);
assertEq(v.value.toString(), "/abc/g");
v = g.next();
assertEq(v.done, true);
