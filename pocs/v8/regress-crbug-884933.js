(function() {
function bar(x, y) {
  return x + y;
}

bar(0.1, 0.2);
bar(0.1, 0.2);

function foo(dv) {
  return bar(dv.getUint8(0, true), 0xFFFFFFFF);
};
%PrepareFunctionForOptimization(foo);
const dv = new DataView(new ArrayBuffer(8));
print(0xFFFFFFFF, foo(dv));
print(0xFFFFFFFF, foo(dv));
%OptimizeFunctionOnNextCall(foo);
print(0xFFFFFFFF, foo(dv));
})();


(function() {
function bar(x, y) {
  return x + y;
}

bar(0.1, 0.2);
bar(0.1, 0.2);

function foo(dv) {
  return bar(dv.getInt8(0, true), 0xFFFFFFFF);
};
%PrepareFunctionForOptimization(foo);
const dv = new DataView(new ArrayBuffer(8));
print(0xFFFFFFFF, foo(dv));
print(0xFFFFFFFF, foo(dv));
%OptimizeFunctionOnNextCall(foo);
print(0xFFFFFFFF, foo(dv));
})();


(function() {
function bar(x, y) {
  return x + y;
}

bar(0.1, 0.2);
bar(0.1, 0.2);

function foo(dv) {
  return bar(dv.getUint16(0, true), 0xFFFFFFFF);
};
%PrepareFunctionForOptimization(foo);
const dv = new DataView(new ArrayBuffer(8));
print(0xFFFFFFFF, foo(dv));
print(0xFFFFFFFF, foo(dv));
%OptimizeFunctionOnNextCall(foo);
print(0xFFFFFFFF, foo(dv));
})();


(function() {
function bar(x, y) {
  return x + y;
}

bar(0.1, 0.2);
bar(0.1, 0.2);

function foo(dv) {
  return bar(dv.getInt16(0, true), 0xFFFFFFFF);
};
%PrepareFunctionForOptimization(foo);
const dv = new DataView(new ArrayBuffer(8));
print(0xFFFFFFFF, foo(dv));
print(0xFFFFFFFF, foo(dv));
%OptimizeFunctionOnNextCall(foo);
print(0xFFFFFFFF, foo(dv));
})();
