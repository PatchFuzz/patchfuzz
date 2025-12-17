function f(o, a) {
  var v;
  var i = 1;
  while (i < 2) {
    v = o.y;
    a[0] = 1.5;
    i++;
  }
  return v;
}

%PrepareFunctionForOptimization(f);
f({y:1.4}, [1]);
f({y:1.6}, [1]);
%OptimizeFunctionOnNextCall(f);
f({x:1}, [1]);


function f2(o) {
  var i = 0;
  var v;
  while (i < 1) {
    v = o.x;
    i++;
  }
  return v;
}

var o1 = { x: 1.5 };
var o2 = { y: 1, x: 1 };

%PrepareFunctionForOptimization(f2);
f2(o1);
f2(o1);
f2(o2);
%OptimizeFunctionOnNextCall(f2);
f2(o2);
