;

function f(a = class C{}) {
  var x;
  return x;
}
print(f(), undefined);

function* g1(a = class C {}) {
  var x;
  print(x, undefined);
}
g1().next();

function* g2(a = class C {}) {
  x;
  let x;
}
print(() => g2().next(), ReferenceError);


