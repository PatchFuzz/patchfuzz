function foo(f) {
  var call = f.call;
  return call.call(call, call, call, f, {}, 1);
}

function f1(x) { return x; }
var f2 = f1.bind({});
var f3 = Math.log;
var f4 = { call: () => { return 2;} }

with ({}) {}
for (var i = 0; i < 2000; i++) {
  print(foo(f4), 2);
  print(foo(f1), 1);
  print(foo(f2), 1);
  print(foo(f3), 0);
}
