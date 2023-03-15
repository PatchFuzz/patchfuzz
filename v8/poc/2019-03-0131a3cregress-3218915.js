
































function side_effect() { try {} finally {} return "wrong"; }


function observe(x, y) { try {} finally {} return x; }




function test(x) { return observe(this, ((0, side_effect()), x + 1)); }


%PrepareFunctionForOptimization(test);
for (var i = 0; i < 5; ++i) test(0);
%OptimizeFunctionOnNextCall(test);
test(0);




print(test("a") === "wrong");
