




























var o1 = {x:1};
var o2 = {};
var deopt_getter = false;
var deopt_setter = false;

function f_mono(o) {
  return 5 + o.x++;
}
%PrepareFunctionForOptimization(f_mono);

var to_deopt = f_mono;

var v = 1;
var g = 0;
var s = 0;

Object.defineProperty(o2, "x",
    {get:function() {
       g++;
       if (deopt_getter) {
         deopt_getter = false;
         %DeoptimizeFunction(to_deopt);
       }
       return v;
     },
     set:function(new_v) {
       v = new_v;
       s++;
       if (deopt_setter) {
         deopt_setter = false;
         %DeoptimizeFunction(to_deopt);
       }
     }});

assertEquals(6, f_mono(o2));
assertEquals(1, g);
assertEquals(1, s);
assertEquals(7, f_mono(o2));
assertEquals(2, g);
assertEquals(2, s);
%OptimizeFunctionOnNextCall(f_mono);
deopt_setter = true;
assertEquals(8, f_mono(o2));
assertEquals(3, g);
assertEquals(3, s);

function f_poly(o) {
  return 5 + o.x++;
}
%PrepareFunctionForOptimization(f_poly);

v = 1;
to_deopt = f_poly;

f_poly(o1);
f_poly(o1);
assertEquals(6, f_poly(o2));
assertEquals(4, g);
assertEquals(4, s);
assertEquals(7, f_poly(o2));
assertEquals(5, g);
assertEquals(5, s);
%OptimizeFunctionOnNextCall(f_poly);
deopt_setter = true;
assertEquals(8, f_poly(o2));
assertEquals(6, g);
assertEquals(6, s);

%PrepareFunctionForOptimization(f_poly);
%OptimizeFunctionOnNextCall(f_poly);
v = undefined;
assertEquals(NaN, f_poly(o2));
assertEquals(7, g);
assertEquals(7, s);

function f_pre(o) {
  return 5 + ++o.x;
}
%PrepareFunctionForOptimization(f_pre);

v = 1;
to_deopt = f_pre;

f_pre(o1);
f_pre(o1);
assertEquals(7, f_pre(o2));
assertEquals(8, g);
assertEquals(8, s);
assertEquals(8, f_pre(o2));
assertEquals(9, g);
assertEquals(9, s);
%OptimizeFunctionOnNextCall(f_pre);
deopt_setter = true;
assertEquals(9, f_pre(o2));
assertEquals(10, g);
assertEquals(10, s);

%PrepareFunctionForOptimization(f_pre);
%OptimizeFunctionOnNextCall(f_pre);
v = undefined;
assertEquals(NaN, f_pre(o2));
assertEquals(11, g);
assertEquals(11, s);


function f_get(o) {
  return 5 + o.x++;
}
%PrepareFunctionForOptimization(f_get);

v = 1;
to_deopt = f_get;

f_get(o1);
f_get(o1);
assertEquals(6, f_get(o2));
assertEquals(12, g);
assertEquals(12, s);
assertEquals(7, f_get(o2));
assertEquals(13, g);
assertEquals(13, s);
%OptimizeFunctionOnNextCall(f_get);
deopt_getter = true;
assertEquals(8, f_get(o2));
assertEquals(14, g);
assertEquals(14, s);

%PrepareFunctionForOptimization(f_get);
%OptimizeFunctionOnNextCall(f_get);
v = undefined;
assertEquals(NaN, f_get(o2));
assertEquals(15, g);
assertEquals(15, s);
