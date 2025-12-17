function TestConstructor(c) {
  var a = new c(-0);
  print(Infinity, 1 / a.length);
  print(Infinity, 1 / a.byteLength);

  var ab = new ArrayBuffer(-0);
  print(Infinity, 1 / ab.byteLength);

  var a1 = new c(ab, -0, -0);
  print(Infinity, 1 / a1.length);
  print(Infinity, 1 / a1.byteLength);
  print(Infinity, 1 / a1.byteOffset);
}

var constructors =
  [ Uint8Array, Int8Array, Uint8ClampedArray,
    Uint16Array, Int16Array,
    Uint32Array, Int32Array,
    Float32Array, Float64Array ];
for (var i = 0; i < constructors.length; i++) {
  TestConstructor(constructors[i]);
}


function TestOptimizedCode() {
  var a = new Uint8Array(-0);
  print(Infinity, 1 / a.length);
  print(Infinity, 1 / a.byteLength);

  var ab = new ArrayBuffer(-0);
  print(Infinity, 1 / ab.byteLength);

  var a1 = new Uint8Array(ab, -0, -0);
  print(Infinity, 1 / a1.length);
  print(Infinity, 1 / a1.byteLength);
  print(Infinity, 1 / a1.byteOffset);
}

%PrepareFunctionForOptimization(TestOptimizedCode);
TestOptimizedCode();
TestOptimizedCode();
%OptimizeFunctionOnNextCall(TestOptimizedCode);
TestOptimizedCode();
