


























function f1(a) {
  a[0](0);
}

function do1() {
  f1([f1]);
}

assertThrows(do1, TypeError);

function f2(a) {
  a[0](true);
}

function do2() {
  f2([function(a) { return f2("undefined", typeof f2(42, 0)); }]);
}

assertThrows(do2, TypeError);
