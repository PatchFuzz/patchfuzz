function foo(args) {
  with ({}) {}
  return args.length;
}

function inner() {
  return arguments;
}

function outer0() {
  trialInline();
  var args = Array.prototype.slice.call(inner(), -2);
  return foo(args);
}

function outer1() {
  trialInline();
  var args = Array.prototype.slice.call(inner(1), -2);
  return foo(args);
}

function outer2() {
  trialInline();
  var args = Array.prototype.slice.call(inner(1, 2), -2);
  return foo(args);
}

function outer3() {
  trialInline();
  var args = Array.prototype.slice.call(inner(1, 2, 3), -2);
  return foo(args);
}

function outer4() {
  trialInline();
  var args = Array.prototype.slice.call(inner(1, 2, 3, 4), -2);
  return foo(args);
}

with ({}) {}

for (var i = 0; i < 50; i++) {
  print(outer0(), 0);
  print(outer1(), 1);
  print(outer2(), 2);
  print(outer3(), 2);
  print(outer4(), 2);
}
