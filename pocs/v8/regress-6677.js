const x = 0;
print(() => { with ({}) { x = 1; } }, TypeError);
print(0, x);

print(() => { with ({}) { eval("x = 1"); } }, TypeError);
print(0, x);



print('function', function f() {
  with ({}) { f = 1 }
  return typeof f;
}());



print('function', function f() {
  with ({}) {
    print(function() { "use strict"; f = 1 }, TypeError);
  }
  return typeof f;
}());
