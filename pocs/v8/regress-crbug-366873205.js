(function TestSmiArray() {
  function f() {
    let arr = Array(48).fill(1, 0);
    arr[15] = -6;
    arr[16] = 153;
    arr[17] = -42;
    arr[18] = 0x3fffffff;
    arr[19] = -0x40000000;

    print(15, arr.indexOf(-6));
    print(16, arr.indexOf(153));
    print(17, arr.indexOf(-42));
    print(18, arr.indexOf(0x3fffffff));
    print(19, arr.indexOf(-0x40000000));

    print(arr.includes(-6));
    print(arr.includes(153));
    print(arr.includes(-42));
    print(arr.includes(0x3fffffff));
    print(arr.includes(-0x40000000));
  }
  %PrepareFunctionForOptimization(f);
  f();
  %OptimizeFunctionOnNextCall(f);
  f();
})();

(function TestObjectArray() {
  return;
  function f() {
    let arr = Array(48).fill(1, 0);
    arr[15] = -6;
    arr[16] = Object;
    arr[17] = 153;
    arr[18] = Array;
    arr[19] = null;

    print(15, arr.indexOf(-6));
    print(16, arr.indexOf(Object));
    print(17, arr.indexOf(153));
    print(18, arr.indexOf(Array));
    print(19, arr.indexOf(null));

    print(arr.includes(-6));
    print(arr.includes(Object));
    print(arr.includes(153));
    print(arr.includes(Array));
    print(arr.includes(null));
  }
  %PrepareFunctionForOptimization(f);
  f();
  %OptimizeFunctionOnNextCall(f);
  f();
})();
