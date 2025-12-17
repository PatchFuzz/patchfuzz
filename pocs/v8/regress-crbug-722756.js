var array = [[{}], [1.1]];

function transition() {
  for (var i = 0; i < array.length; i++) {
    var arr = array[i];
    arr[0] = {};
  }
}

var double_arr2 = [1.1, 2.2];

var flag = 0;
function swap() {
  try {
  } catch (e) {
  }  
  if (flag == 1) {
    array[1] = double_arr2;
  }
}

var expected = 6.176516726456e-312;
function f() {
  swap();
  double_arr2[0] = 1;
  transition();
  double_arr2[1] = expected;
};
%PrepareFunctionForOptimization(f);
for (var i = 0; i < 3; i++) {
  f();
}
%OptimizeFunctionOnNextCall(f);
flag = 1;
f();
print(expected, double_arr2[1]);
