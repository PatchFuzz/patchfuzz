




























var a = {};
a.x = 1;
a.y = 1.5;

var b = {};
b.x = 1.5;
b.y = 1;

var c = {};
c.x = 1.5;

var d = {};
d.x = 1.5;

var e = {};
e.x = 1.5;

var f = {};
f.x = 1.5;

var g = {};
g.x = 1.5;

var h = {};
h.x = 1.5;

var i = {};
i.x = 1.5;

var o = {};
var p = {y: 10, z: 1};
o.__proto__ = p;
delete p.z;

function foo(v, w) {
  
  
  v.y;
  
  w.y = 1;
  return b.y;
};
%PrepareFunctionForOptimization(foo);
foo(o, c);
foo(o, d);
foo(o, e);
%OptimizeFunctionOnNextCall(foo);
foo(b, f);
foo(b, g);
foo(b, h);
foo(a, i);
