





























var pro = {x: 1};
var a = {};
a.__proto__ = pro;
delete pro.x;

function g(o) {
  return 7 + (o.z = 1, 20);
};
%PrepareFunctionForOptimization(g);
g(a);
g(a);
%OptimizeFunctionOnNextCall(g);
Object.defineProperty(pro, 'z', {
  set: function(v) {
    %DeoptimizeFunction(g);
  },
  get: function() {
    return 20;
  }
});

assertEquals(27, g(a));



var i = {z: 2, r: 1};
var j = {z: 2};
var p = {a: 10};
var pp = {a: 20, b: 1};

function bar(o, p) {
  return 7 + (o.z = 1, p.a);
};
%PrepareFunctionForOptimization(bar);
bar(i, p);
bar(i, p);
bar(j, p);
%OptimizeFunctionOnNextCall(bar);
assertEquals(27, bar(i, pp));



var i = {r: 1, z: 2};
var j = {z: 2};
var p = {a: 10};
var pp = {a: 20, b: 1};

function bar1(o, p) {
  return 7 + (o.z = 1, p.a);
};
%PrepareFunctionForOptimization(bar1);
bar1(i, p);
bar1(i, p);
bar1(j, p);
%OptimizeFunctionOnNextCall(bar1);
assertEquals(27, bar1(i, pp));
