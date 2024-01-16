






























function makeClosure() {
  function f(mode, iterations) {
    var accumulator = 0;
    if (mode == 1) {
      while (--iterations > 0) accumulator = Math.ceil(accumulator);
      return 1;
    } else {
      while (--iterations > 0) accumulator = Math.floor(accumulator);
      return 2;
    }
  }
  return f;
}


var f1 = makeClosure();
var f2 = makeClosure();


assertSame(1, f1(1, 100000));


assertSame(2, f2(2, 100000));
