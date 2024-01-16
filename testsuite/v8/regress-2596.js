




























var ab = new ArrayBuffer(8);
var i_view = new Int32Array(ab);
i_view[0] = %GetHoleNaNUpper();
i_view[1] = %GetHoleNaNLower();
var doubles = new Float64Array(ab);  
assertTrue(isNaN(doubles[0]));

var prototype = [2.5, 2.5];
var array = [3.5, 3.5];
array.__proto__ = prototype;
assertTrue(%HasDoubleElements(array));

function boom(index) {
  array[index] = doubles[0];
  return array[index];
};
%PrepareFunctionForOptimization(boom);
assertTrue(isNaN(boom(0)));
assertTrue(isNaN(boom(0)));
assertTrue(isNaN(boom(0)));


%OptimizeFunctionOnNextCall(boom);
assertTrue(isNaN(boom(0)));
assertTrue(isNaN(boom(0)));
assertTrue(isNaN(boom(0)));
