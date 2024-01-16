function lameFunc(x, y) {
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

function runSomeTimes(func, iters) {
    var result;
    for (var i = 0; i < iters; ++i) {
        result = func(42, 42);
        result = func(42, 42);
    }
    return result;
}


for (var i = 0; i < 100; ++i)
    lameFunc(42, 42);



for (var i = 0; i < 11000; ++i)
    runSomeTimes(lameFunc, 1);


var iterations = 100;
assertEq(84, runSomeTimes(lameFunc, iterations));
