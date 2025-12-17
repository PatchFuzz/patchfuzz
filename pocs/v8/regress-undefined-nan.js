function loader(dst, src, i) {
  dst[i] = src[i];
};
%PrepareFunctionForOptimization(loader);
var ab = new ArrayBuffer(8);
var i_view = new Int32Array(ab);
i_view[0] = %GetHoleNaNUpper();
i_view[1] = %GetHoleNaNLower();
var f_view = new Float64Array(ab);

var fixed_double_elements = new Float64Array(1);

function opt_store() {
  fixed_double_elements[0] = f_view[0];
};
%PrepareFunctionForOptimization(opt_store);
opt_store();
opt_store();
%OptimizeFunctionOnNextCall(opt_store);
opt_store();

var i32 = new Int32Array(fixed_double_elements.buffer);
print(i_view[0], i32[0]);
print(i_view[1], i32[1]);

var doubles = [0.5];
loader(doubles, fixed_double_elements, 0);
loader(doubles, fixed_double_elements, 0);
%OptimizeFunctionOnNextCall(loader);
loader(doubles, fixed_double_elements, 0);
print(doubles[0] !== undefined);
