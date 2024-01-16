





function f(x) {
  
  if (x === 'some_other_string_1' || x === 'some_string') {
    gc();
  }
  if (x === 'some_other_string_2' || x === 'some_string') {
    gc();
  }
  
  if (x === 1.7 || x === 1.4) {
    gc();
  }
  if (x === 1.9 || x === 1.4) {
    gc();
  }
};
%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);

f('some_other_string_1');
f(1.7);
