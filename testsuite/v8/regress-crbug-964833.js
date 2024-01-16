





function f() {
  var n = 3;
  var obj = {};

  var m = n;
  for (;;) {
    m++;

    if (m == 456) {
      break;
    }

    var i = 0;
    var j = 0;
    while (i < 1) {
      j = i;
      i++;
    }
    obj.y = j;
  }
}

%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
