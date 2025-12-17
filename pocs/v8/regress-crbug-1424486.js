const __v_1 = {};

function f() {
  try {
    var array = Object.defineProperties([0,0], { 1: __v_1 });
  } catch (e1) {}
  try {
    for (var elem in array) {
      try {
        __v_1 = null;
      } catch (e2) {}
      array = elem;
      try {
        if (elem === "0") {
          try {
            Object.defineProperties();
          } catch (e3) {}
        }
      } catch (e4) {}
    }
  } catch (e5) {}
  array[0];
}

%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
