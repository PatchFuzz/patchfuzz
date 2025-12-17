function counter() {
  var i = 100;
  return function() {
    if (i-- > 0) return i;
    throw "done";
  }
}

var c1 = counter();
var c2 = counter();

var f = (function() {
  "use asm";
  return function f(i) {
    i = i|0;
    do {
      if (i > 0) c1();
      else c2();
    } while (true);
  }
})();

print(function() { f(0); });
print(function() { f(1); });

var c3 = counter();

var g = (function() {
  "use asm";
  return function g(i) {
    i = i + 1;
    do {
      i = c3(i);
    } while (true);
  }
})();

print(function() { g(0); });
print(function() { g(1); });
