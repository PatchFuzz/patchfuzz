




























function f(o) {
  var a = 1;
  if (true) return o.v && a;
}

%PrepareFunctionForOptimization(f);
f({});
f({});
%OptimizeFunctionOnNextCall(f);
assertEquals(1, f({ v: 1 }));


function f1() { return 1 && 2; };
function f2() { return 1 || 2; };
function f3() { return 0 && 2; };
function f4() { return 0 || 2; };

[f1, f2, f3, f4].forEach(function(f) { %PrepareFunctionForOptimization(f); });

function test() {
  assertEquals(2, f1());
  assertEquals(1, f2());
  assertEquals(0, f3());
  assertEquals(2, f4());
}

test();
test();
[f1, f2, f3, f4].forEach(function(f) { %OptimizeFunctionOnNextCall(f); });
test();
