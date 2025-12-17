function foo(f) {
  return f(1);
}

with ({}) {}

function f1() { return arguments; }
function f2(x) { return [x]; }
function f3(x,y) { return [x,y]; }
function f4(x,y,z) { return [x,y,z]; }

let f5 = f4.bind({});
let f6 = f4.bind({}, 2);
let f7 = f4.bind({}, 2, 3);

function print(a,b) {
  print(a.length, b.length);
  for (var i = 0; i < a.length; i++) {
    print(a[i], b[i]);
  }
}

for (var i = 0; i < 500; i++) {
  print(foo(f1), [1]);
  print(foo(f2), [1]);
  print(foo(f3), [1, undefined]);
  print(foo(f4), [1, undefined, undefined]);
  print(foo(f5), [1, undefined, undefined]);
  print(foo(f6), [2, 1, undefined]);
  print(foo(f7), [2, 3, 1]);
}
