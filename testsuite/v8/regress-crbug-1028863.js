





function write(begin, end, step) {
  for (var i = begin; i >= end; i += step) {
    step = end - begin;
    begin >>>= 805306382;
  }
}

function bar() {
  for (let i = 0; i < 10000; i++) {
    write(Infinity, 1, 1);
  }
}

%PrepareFunctionForOptimization(write);
%PrepareFunctionForOptimization(bar);
bar();
%OptimizeFunctionOnNextCall(bar);
bar();
