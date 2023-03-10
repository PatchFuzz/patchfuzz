






























function A() {}
function B() {}

function fee(x, y) {
  if (x == 1) return fee["arg" + "uments"];
  if (x == 2) return gee["arg" + "uments"];
  return 42;
}

function gee(x) { return this.f(2 - x, "f"); }

function foo(x, y) {
  if (x == 0) return foo["arg" + "uments"];
  if (x == 1) return goo["arg" + "uments"];
  return 42;
}

function goo(x) { return this.f(x, "f"); }

A.prototype.f = fee;
A.prototype.g = gee;

B.prototype.f = foo;
B.prototype.g = goo;

var o = new A();

function hej(x) {
  if (x == 0) return o.g(x, "h");
  if (x == 1) return o.g(x, "h");
  return o.g(x, "z");
}

function opt_g() {
  %PrepareFunctionForOptimization(o.g);
  for (var k=0; k<2; k++) {
    for (var i=0; i<5; i++) o.g(i, "g");
  }
  %OptimizeFunctionOnNextCall(o.g);
  o.g(0, "g");
}

function opt_hej() {
  %PrepareFunctionForOptimization(hej);
  for (var k=0; k<2; k++) {
    for (var j=0; j<5; j++) hej(j);
  }
  %OptimizeFunctionOnNextCall(hej);
  hej(0)
}

opt_g();
opt_hej();
print([0, "g"], o.g(0, "g"));
print([1, "f"], o.g(1, "g"));
print([0, "h"], hej(0));
print([1, "f"], hej(1));

o = new B();

opt_g();
opt_hej();
print([0, "f"], o.g(0, "g"));
print([1, "g"], o.g(1, "g"));
print([0, "f"], hej(0));
print([1, "h"], hej(1));
