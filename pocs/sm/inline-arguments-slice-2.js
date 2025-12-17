function foo(args) {
  with ({}) {}
  return args.length;
}

function inner() {
  return foo(Array.prototype.slice.call(arguments, 1));
}

function outer0() {
  trialInline();
  return inner();
}

function outer1() {
  trialInline();
  return inner(1);
}

function outer2() {
  trialInline();
  return inner(1, 2);
}

function outer3() {
  trialInline();
  return inner(1, 2, 3)
}

function outer4() {
  trialInline();
  return inner(1, 2, 3, 4)
}

with ({}) {}

for (var i = 0; i < 50; i++) {
  print(outer0(), 0);
  print(outer1(), 0);
  print(outer2(), 1);
  print(outer3(), 2);
  print(outer4(), 3);
}
