





























function testMul(a, b) {
  a *= 2;
  b *= 2;
  if (a < 1 && b < 1) {
    return a * b;
  }
}

%PrepareFunctionForOptimization(testMul);
for (var i=0; i<5; i++) testMul(0,0);
%OptimizeFunctionOnNextCall(testMul);
print(4611686018427388000, testMul(-0x40000000, -0x40000000));

function testAdd(a, b) {
  a *= 2;
  b *= 2;
  if (a < 1 && b < 1) {
    return a + b;
  }
}

%PrepareFunctionForOptimization(testAdd);
for (var i=0; i<5; i++) testAdd(0,0);
%OptimizeFunctionOnNextCall(testAdd);
print(-4294967296, testAdd(-0x40000000, -0x40000000));


function testSub(a, b) {
  a *= 2;
  b *= 2;
  if (b == 2) {print(a); print(b);}
  if (a < 1 && b < 3) {
    return a - b;
  }
}

%PrepareFunctionForOptimization(testSub);
for (var i=0; i<5; i++) testSub(0,0);
%OptimizeFunctionOnNextCall(testSub);
print(-2147483650, testSub(-0x40000000, 1));
