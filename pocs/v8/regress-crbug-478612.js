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
print(3, f());
print(3, f());
%OptimizeFunctionOnNextCall(f);
print(3, f());


function g() {
  var y = 2;
  return 1 & z | y++;
};
%PrepareFunctionForOptimization(g);
print(3, g());
print(3, g());
%OptimizeFunctionOnNextCall(g);
print(3, g());


function h() {
  var y = 3;
  return 3 & z & y++;
};
%PrepareFunctionForOptimization(h);
print(3, h());
print(3, h());
%OptimizeFunctionOnNextCall(h);
print(3, h());


function i() {
  var y = 2;
  return 1 & z ^ y++;
};
%PrepareFunctionForOptimization(i);
print(3, i());
print(3, i());
%OptimizeFunctionOnNextCall(i);
print(3, i());
