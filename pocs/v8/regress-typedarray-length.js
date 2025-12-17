var a = new Int32Array(100);
a.__proto__ = null;

function get(a) {
  return a.length;
};
%PrepareFunctionForOptimization(get);
print(undefined, get(a));
print(undefined, get(a));
print(undefined, get(a));
%OptimizeFunctionOnNextCall(get);
print(undefined, get(a));

get = function(a) {
  return a.byteLength;
};
;
%PrepareFunctionForOptimization(get);
print(undefined, get(a));
print(undefined, get(a));
print(undefined, get(a));
%OptimizeFunctionOnNextCall(get);
print(undefined, get(a));

get = function(a) {
  return a.byteOffset;
};
;
%PrepareFunctionForOptimization(get);
print(undefined, get(a));
print(undefined, get(a));
print(undefined, get(a));
%OptimizeFunctionOnNextCall(get);
print(undefined, get(a));

(function() {
"use strict";

class MyTypedArray extends Int32Array {
  get length() {
    return "length";
  }
}

a = new MyTypedArray();

get = function(a) {
  return a.length;
};
;
%PrepareFunctionForOptimization(get);
print("length", get(a));
print("length", get(a));
print("length", get(a));
%OptimizeFunctionOnNextCall(get);
print("length", get(a));

a.__proto__ = null;

get = function(a) {
  return a.length;
};
;
%PrepareFunctionForOptimization(get);
print(undefined, get(a));
print(undefined, get(a));
print(undefined, get(a));
%OptimizeFunctionOnNextCall(get);
print(undefined, get(a));
})();

(function() {
"use strict";

class MyTypedArray extends Int32Array {
  constructor(length) {
    super(length);
  }
}

a = new MyTypedArray(1024);

get = function(a) {
  return a.length;
};
;
%PrepareFunctionForOptimization(get);
print(1024, get(a));
print(1024, get(a));
print(1024, get(a));
%OptimizeFunctionOnNextCall(get);
print(1024, get(a));
})();

(function() {
"use strict";
var a = new Uint8Array(4);
Object.defineProperty(a, 'length', {
  get: function() {
    return 'blah';
  }
});
get = function(a) {
  return a.length;
};
;
%PrepareFunctionForOptimization(get);
print("blah", get(a));
print("blah", get(a));
print("blah", get(a));
%OptimizeFunctionOnNextCall(get);
print("blah", get(a));
})();


print(Int32Array.prototype.__proto__.hasOwnProperty("length"));
print(Int32Array.prototype.__proto__.hasOwnProperty("byteOffset"));
print(Int32Array.prototype.__proto__.hasOwnProperty("byteLength"));
print(delete Int32Array.prototype.__proto__.length);
print(delete Int32Array.prototype.__proto__.byteOffset);
print(delete Int32Array.prototype.__proto__.byteLength);

a = new Int32Array(100);

get = function(a) {
  return a.length;
};
;
%PrepareFunctionForOptimization(get);
print(undefined, get(a));
print(undefined, get(a));
print(undefined, get(a));
%OptimizeFunctionOnNextCall(get);
print(undefined, get(a));

get = function(a) {
  return a.byteLength;
};
;
%PrepareFunctionForOptimization(get);
print(undefined, get(a));
print(undefined, get(a));
print(undefined, get(a));
%OptimizeFunctionOnNextCall(get);
print(undefined, get(a));

get = function(a) {
  return a.byteOffset;
};
;
%PrepareFunctionForOptimization(get);
print(undefined, get(a));
print(undefined, get(a));
print(undefined, get(a));
%OptimizeFunctionOnNextCall(get);
print(undefined, get(a));
