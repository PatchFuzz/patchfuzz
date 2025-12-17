function foo(o) {
  return o.f(1);
}

function id(x) { return x; }

var o1 = { f: id }
var o2 = { f: id.bind({}) }
var o3 = { f: id.bind({}, 2) }
var o4 = [0,0,0,1,0,0,0,0,1,0,0,0];
o4.f = [].indexOf;
var o5 = [0,0,0,1,0,0,0,1,0,0];
o5.f = [].lastIndexOf;

with ({}) {}
for (var i = 0; i < 500; i++) {
  print(foo(o1), 1);
  print(foo(o2), 1);
  print(foo(o3), 2);
  print(foo(o4), 3);
  print(foo(o5), 7);
}
