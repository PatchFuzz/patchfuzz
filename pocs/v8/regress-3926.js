function f(x) {
  var z;
  switch (x) {
    case 1:
      let y = 1;
    case 2:
      y = 2;
    case 3:
      z = y;
  }
  return z;
}
print(2, f(1));
print(function() {f(2)}, ReferenceError);
print(function() {f(3)}, ReferenceError);


print(function() {
  switch (1) {
    case 0:
      let x = 2;
    case 1:
    { 
      let y = 3;
      x;
    }
  }
}, ReferenceError);



function g(x) {
  switch (x) {
    case 1:
      let z;
    case 2:
      return function() { z = 1; }
    case 3:
      return function() { return z; }
    case 4:
      return eval("z = 1");
    case 5:
      return eval("z");
  }
}

print(undefined, g(1)());
print(g(2), ReferenceError);
print(g(3), ReferenceError);
print(function () {g(4)}, ReferenceError);
print(function () {g(5)}, ReferenceError);



function h(x) {
  'use strict'
  switch (x) {
    case 1:
      let z;
    case 2:
      return function() { z = 1; }
    case 3:
      return function() { return z; }
    case 4:
      return eval("z = 1");
    case 5:
      return eval("z");
  }
}

print(undefined, h(1)());
print(h(2), ReferenceError);
print(h(3), ReferenceError);
print(function () {h(4)}, ReferenceError);
print(function () {h(5)}, ReferenceError);
