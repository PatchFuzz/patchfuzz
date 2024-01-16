






var z = {
  valueOf: function() {
    return 3;
  }
};

function f() {
  var y = -2;
  return (1 & z) - y++;
};
%PrepareFunctionForOptimization(f);
assertEquals(3, f());
assertEquals(3, f());
%OptimizeFunctionOnNextCall(f);
assertEquals(3, f());


function g() {
  var y = 2;
  return 1 & z | y++;
};
%PrepareFunctionForOptimization(g);
assertEquals(3, g());
assertEquals(3, g());
%OptimizeFunctionOnNextCall(g);
assertEquals(3, g());


function h() {
  var y = 3;
  return 3 & z & y++;
};
%PrepareFunctionForOptimization(h);
assertEquals(3, h());
assertEquals(3, h());
%OptimizeFunctionOnNextCall(h);
assertEquals(3, h());


function i() {
  var y = 2;
  return 1 & z ^ y++;
};
%PrepareFunctionForOptimization(i);
assertEquals(3, i());
assertEquals(3, i());
%OptimizeFunctionOnNextCall(i);
assertEquals(3, i());
