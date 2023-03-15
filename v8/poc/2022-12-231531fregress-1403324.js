





function foo(__v_4) {
    var __v_5 = function () {
      return __v_4;
    }();
    var __v_6 = __v_5.x;
    arguments[42];
  return __v_6 + __v_5.x;
}
var __v_0 = {x: 24};
__v_0.g = 43;

%PrepareFunctionForOptimization(foo);
foo({x: 42});
foo({x: 42});

%OptimizeMaglevOnNextCall(foo);
var __v_3 = {x: 42};
Object.prototype.__defineGetter__(42, function () {
    __v_3.__defineGetter__("x", function () {
    });
});

print(NaN, foo(__v_3));
