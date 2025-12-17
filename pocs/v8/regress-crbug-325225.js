function f1(a) {
  a[0](0);
}

function do1() {
  f1([f1]);
}

print(do1, TypeError);

function f2(a) {
  a[0](true);
}

function do2() {
  f2([function(a) { return f2("undefined", typeof f2(42, 0)); }]);
}

print(do2, TypeError);
