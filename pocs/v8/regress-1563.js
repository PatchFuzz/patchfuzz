obj = new Uint8ClampedArray(10);



function set_pixel(obj, arg) {
  obj[0] = arg;
};
%PrepareFunctionForOptimization(set_pixel);
set_pixel(obj, 1.5);
set_pixel(obj, NaN);
%OptimizeFunctionOnNextCall(set_pixel);
set_pixel(obj, undefined);
set_pixel(obj, undefined);

print(0, obj[0]);
