





var a = new Float64Array(4);
a[2] *= -1;
a[3] *= -1;
assertEquals(0, a[0]);
assertEquals(0, a[1]);
assertEquals(-0, a[2]);
assertEquals(-0, a[3]);

function f1() {
  var z = a[0];
  
  assertEquals(0, Math.min(z, z));
};
%PrepareFunctionForOptimization(f1);
function f2() {
  
  assertEquals(0, Math.min(a[0], a[1]));
};
%PrepareFunctionForOptimization(f2);
function f3() {
  
  assertEquals(-0, Math.min(a[1], a[2]));
};
%PrepareFunctionForOptimization(f3);
function f4() {
  
  assertEquals(-0, Math.min(a[2], a[1]));
};
%PrepareFunctionForOptimization(f4);
function f5() {
  
  var m_z = a[2];
  assertEquals(-0, Math.min(m_z, m_z));
};
%PrepareFunctionForOptimization(f5);
function f6() {
  
  assertEquals(-0, Math.min(a[2], a[3]));
};
%PrepareFunctionForOptimization(f6);
for (var i = 0; i < 3; i++) {
  f1();
  f2();
  f3();
  f4();
  f5();
  f6();
}
%OptimizeFunctionOnNextCall(f1);
%OptimizeFunctionOnNextCall(f2);
%OptimizeFunctionOnNextCall(f3);
%OptimizeFunctionOnNextCall(f4);
%OptimizeFunctionOnNextCall(f5);
%OptimizeFunctionOnNextCall(f6);
f1();
f2();
f3();
f4();
f5();
f6();
