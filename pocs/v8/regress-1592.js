var f = {apply: function(a, b) {}};

function test(a) {
  f.apply(this, arguments);
}


;
%PrepareFunctionForOptimization(test);
test(1);
test(1);

%OptimizeFunctionOnNextCall(test);


test(1);
