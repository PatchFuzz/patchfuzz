;


eval(`function f1() { yield /abc/g; }`);


var ex;
try {
  f1();
} catch(e) {
  ex = e;
}
print(ex instanceof ReferenceError, true);


function* f2() {
  yield /abc/g;
}

g = f2();
v = g.next();
print(v.done, false);
print(v.value instanceof RegExp, true);
print(v.value.toString(), "/abc/g");
v = g.next();
print(v.done, true);
