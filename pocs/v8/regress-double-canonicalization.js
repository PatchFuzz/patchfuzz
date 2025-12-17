var ab = new ArrayBuffer(8);
var i_view = new Int32Array(ab);
i_view[0] = %GetHoleNaNUpper();
i_view[1] = %GetHoleNaNLower();
var hole_nan = new Float64Array(ab)[0];

var array = [];

function write() {
  array[0] = hole_nan;
};
%PrepareFunctionForOptimization(write);
write();
%OptimizeFunctionOnNextCall(write);
write();
array[1] = undefined;
print(isNaN(array[0]));
print("number", typeof array[0]);
