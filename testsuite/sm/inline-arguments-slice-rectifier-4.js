

function foo(a, b) {
  with ({}) {}
  return a + b;
}

function inner(w, x, y, z) {
  var args = Array.prototype.slice.call(arguments, 1, 3);
  assertEq(x + y, foo(args[0], args[1]));
}

function outer0() {
  trialInline();
  inner();
}

function outer1() {
  trialInline();
  inner(1);
}

function outer2() {
  trialInline();
  inner(1, 2);
}

function outer3() {
  trialInline();
  inner(1, 2, 3);
}

with ({}) {}

for (var i = 0; i < 50; i++) {
  outer0();
  outer1();
  outer2();
  outer3();
}
