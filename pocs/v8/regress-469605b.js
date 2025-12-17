function counter() {
  var i = 10000;
  return function() {
    if (i-- > 0) return i;
    throw "done";
  }
}


var f = (function() {
  "use asm";
  return function f(i, c1, c2) {
    i = i|0;
    do {
      if (i > 0) { while (0 ? this : this) { c1(); } }
      else c2();
    } while (true);
  }
})();

print(function() { f(0, counter(), counter()); });
print(function() { f(1, counter(), counter()); });
