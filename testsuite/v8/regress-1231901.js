





function __f_9() {}
function __f_10() {}

function f(a, b) {
  if (b) {
    new __f_10().__proto__ = a;
  } else {
    __f_10.prototype = a;
  }
}

function g(a, b, c) {
    var d = a ? new __f_9() : {};
  if (b) { g(d); }
  f(d, c);
}

g(false, true, false);
g(false, false, false);
g(false, false, false, undefined);

g(false, true, true);
g(false, false, true);
g(false, false, true, undefined);

g(true, true, false);
g(true, false, false);
g(true, false, false, undefined);

g(true, true, true);
g(true, false, true);
g(true, false, true, undefined);
